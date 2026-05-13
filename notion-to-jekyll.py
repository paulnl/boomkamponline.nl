#!/usr/bin/env python3
"""
Notion → Jekyll converter voor BoomkampOnline.NL blog.

Leest de Notion "📝 Blog Content — BoomkampOnline.NL" database uit
en genereert Jekyll markdown bestanden voor alle entries met inhoud.

Werkt op basis van post_id: als er al een bestand is met dezelfde
post_id en taal, wordt het overgeslagen (tenzij --force).

Gebruik:
  source /home/paul/.config/opencode/.env && python3 notion-to-jekyll.py

Opties:
  --force           Overschrijf bestaande bestanden (standaard: skip)
  --status=X,Y      Filter op status (bv. --status=Gepubliceerd,Concept)
  --dry-run         Laat alleen zien wat er zou gebeuren
  --only-new        Alleen entries zonder bestaand bestand (handig voor nieuwe artikelen)
"""

import os
import sys
import json
import re
import unicodedata
from datetime import datetime, date
from pathlib import Path

# === Config ===
NOTION_TOKEN = os.environ.get("NOTION_TOKEN", "")
NOTION_VERSION = os.environ.get("NOTION_VERSION", "2022-06-28")
DATABASE_ID = "35fb793a92678180a33aefc048239aee"
POSTS_DIR = Path(__file__).parent / "_posts"

FORCE = "--force" in sys.argv
DRY_RUN = "--dry-run" in sys.argv
ONLY_NEW = "--only-new" in sys.argv

status_filter = None
for arg in sys.argv:
    if arg.startswith("--status="):
        status_filter = arg.split("=", 1)[1].split(",")

LANG_TO_CONTENT_PROP = {
    "nl": "📝 Inhoud (NL)",
    "en": "📝 Inhoud (EN)",
    "de": "📝 Inhoud (DE)",
}

LANG_SUFFIX = {
    "nl": "",
    "en": "-en",
    "de": "-de",
}


# === Helpers ===
def slugify(text):
    """Maak een URL-vriendelijke slug van tekst."""
    text = text.lower().strip()
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def get_rich_text(props, prop_name):
    """Haal platte tekst uit een Notion rich_text property."""
    prop = props.get(prop_name, {})
    texts = prop.get("rich_text", [])
    return "".join(t.get("plain_text", "") for t in texts).strip()


def get_title(props):
    """Haal titel uit title property."""
    prop = props.get("Titel", {})
    titles = prop.get("title", [])
    return "".join(t.get("plain_text", "") for t in titles).strip()


def get_select(props, prop_name):
    """Haal waarde uit een select property."""
    prop = props.get(prop_name, {})
    s = prop.get("select")
    return s.get("name") if s else None


def get_date(props, prop_name):
    """Haal datum uit een date property."""
    prop = props.get(prop_name, {})
    d = prop.get("date")
    return d.get("start") if d else None


def get_date_parser(date_str):
    """Parse datum string naar date object."""
    if not date_str:
        return date.today()
    try:
        return datetime.strptime(date_str[:10], "%Y-%m-%d").date()
    except (ValueError, TypeError):
        return date.today()


# === API ===
def call_notion_api(url, method="GET", data=None):
    """Call Notion API."""
    headers = {
        "Authorization": f"Bearer {NOTION_TOKEN}",
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
    }
    import urllib.request

    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, headers=headers, method=method)

    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())
    except urllib.error.HTTPError as e:
        print(f"  ⚠ API fout: {e.code} {e.reason}")
        print(f"    Response: {e.read().decode()[:500]}")
        return None


def query_database(database_id, start_cursor=None):
    """Query Notion database."""
    url = f"https://api.notion.com/v1/databases/{database_id}/query"
    data = {"page_size": 100}
    if start_cursor:
        data["start_cursor"] = start_cursor
    return call_notion_api(url, method="POST", data=data)


def get_all_entries():
    """Haal alle entries op uit de database (met paginering)."""
    entries = []
    cursor = None
    has_more = True
    while has_more:
        result = query_database(DATABASE_ID, cursor)
        if not result:
            break
        entries.extend(result.get("results", []))
        has_more = result.get("has_more", False)
        cursor = result.get("next_cursor")
    return entries


# === Bestaande bestanden indexeren ===
def index_existing_posts():
    """
    Bouw een index van bestaande markdown bestanden.
    Returns: dict met {(post_id, lang): filepath}
    """
    index = {}
    if not POSTS_DIR.exists():
        return index

    for f in sorted(POSTS_DIR.glob("*.md")):
        content = f.read_text(encoding="utf-8")
        # Lees frontmatter
        if content.startswith("---"):
            end = content.find("---", 3)
            if end != -1:
                fm = content[3:end]
                pid = None
                lang = None
                for line in fm.split("\n"):
                    line_stripped = line.strip()
                    if line_stripped.startswith("post_id:"):
                        pid = line_stripped.split(":", 1)[1].strip().strip('"').strip("'")
                    elif line_stripped.startswith("lang:"):
                        lang = line_stripped.split(":", 1)[1].strip()
                if pid and lang:
                    index[(pid, lang)] = f
    return index


# === Jekyll Generatie ===
def generate_frontmatter(title, description, date_obj, category, lang, post_id):
    """Genereer Jekyll frontmatter."""
    lines = ["---"]
    lines.append("layout: post")
    lines.append(f'title: "{title}"')
    lines.append(f'description: "{description}"')
    lines.append(f"date: {date_obj.isoformat()}")
    lines.append(f'category: "{category}"')
    lines.append(f"lang: {lang}")
    lines.append(f'post_id: "{post_id}"')
    lines.append("---")
    return "\n".join(lines)


def generate_filename(date_obj, title, lang):
    """Genereer Jekyll filename met taal-specifieke suffix voor EN/DE."""
    base_slug = slugify(title)
    suffix = LANG_SUFFIX.get(lang, "")
    return f"{date_obj.isoformat()}-{base_slug}{suffix}.md"


def generate_blog_post(props, existing_index):
    """
    Genereer Jekyll markdown bestanden voor één Notion entry.
    
    Args:
        props: Notion page properties
        existing_index: dict {(post_id, lang): filepath} van bestaande bestanden
        
    Returns:
        tuple: (aangemaakt, overgeslagen, nieuw)
    """
    post_id = get_rich_text(props, "post_id") or "unknown"
    title_nl = get_title(props)
    status = get_select(props, "Status") or "Concept"
    category = get_select(props, "Categorie") or "Algemeen"
    pub_date = get_date(props, "Publicatiedatum")
    description = get_rich_text(props, "Beschrijving")

    if not title_nl:
        print(f"  ⏭ Geen titel, skip")
        return (0, 0, False)

    d = get_date_parser(pub_date)

    print(f"\n📄 {post_id}: {title_nl[:70]}...")
    print(f"   Status: {status} | Categorie: {category}")

    # Bepaal beschikbare talen op basis van inhoud
    languages = []
    for lang_code, prop_name in LANG_TO_CONTENT_PROP.items():
        content = get_rich_text(props, prop_name)
        if content:
            languages.append((lang_code, content))

    if not languages:
        print(f"   ⏭ Geen inhoud in NL/EN/DE, skip")
        return (0, 0, False)

    lang_list = [l[0] for l in languages]
    print(f"   Talen met inhoud: {lang_list}")

    # Genereer bestanden
    created = 0
    skipped = 0
    is_new_entry = True  # Wordt False als we een bestaand bestand vinden

    for lang_code, content in languages:
        filename = generate_filename(d, title_nl, lang_code)
        filepath = POSTS_DIR / filename

        # Check of er al een bestand is met deze post_id + lang
        existing = existing_index.get((post_id, lang_code))
        if existing:
            is_new_entry = False
            if not FORCE:
                print(f"   ⏭ {lang_code}: bestaat al ({existing.name})")
                skipped += 1
                continue
            else:
                print(f"   ⚠ {lang_code}: forceer overschrijven van {existing.name}")

        if DRY_RUN:
            action = "overschrijven" if existing else "nieuw"
            print(f"   🔷 {lang_code}: {filename} ({action}, dry-run)")
            created += 1
            continue

        # Genereer frontmatter
        frontmatter = generate_frontmatter(
            title=title_nl,
            description=description,
            date_obj=d,
            category=category,
            lang=lang_code,
            post_id=post_id,
        )

        # Schrijf bestand
        full_content = frontmatter + "\n\n" + content + "\n"
        filepath.write_text(full_content, encoding="utf-8")
        action = "overschreven" if existing else "aangemaakt"
        print(f"   ✅ {lang_code}: {filename} ({action})")
        created += 1

    return (created, skipped, is_new_entry)


# === Main ===
def main():
    if not NOTION_TOKEN:
        print("❌ NOTION_TOKEN niet gevonden. Gebruik:")
        print("   source /home/paul/.config/opencode/.env && python3 notion-to-jekyll.py")
        return 1

    print("=" * 55)
    print("  Notion → Jekyll converter — BoomkampOnline.NL")
    print("=" * 55)
    
    if DRY_RUN:
        print("🔷 DRY RUN — er worden geen bestanden geschreven\n")
    elif FORCE:
        print("⚠ FORCE modus — bestaande bestanden worden overschreven\n")
    else:
        print("👉 Normale modus — bestaande bestanden worden overgeslagen\n")

    if status_filter:
        print(f"📋 Filter op status: {status_filter}")
    if ONLY_NEW:
        print(f"📋 Alleen nieuwe entries (zonder bestaand bestand)")

    # Indexeer bestaande bestanden
    print("\n📂 Bestaande bestanden indexeren...")
    existing_index = index_existing_posts()
    print(f"   {len(existing_index)} bestaande post-varianten gevonden")

    # Haal Notion data op
    print("\n📡 Notion database ophalen...")
    entries = get_all_entries()
    print(f"   {len(entries)} entries gevonden\n")

    total_created = 0
    total_skipped = 0
    total_filtered = 0
    total_no_content = 0
    total_new = 0
    total_existing_skip = 0

    for page in entries:
        props = page.get("properties", {})
        post_id_val = get_rich_text(props, "post_id") or ""
        status = get_select(props, "Status") or "Concept"

        # Filter op status
        if status_filter and status not in status_filter:
            total_filtered += 1
            continue

        # Skip entries zonder titel
        title = get_title(props)
        if not title:
            total_skipped += 1
            continue

        # Bij --only-new: skip als er al bestanden bestaan voor deze post_id
        if ONLY_NEW:
            has_existing = any(
                (post_id_val, lang) in existing_index
                for lang in LANG_TO_CONTENT_PROP.keys()
            )
            if has_existing:
                total_existing_skip += 1
                print(f"⏩ {post_id_val}: bestaat al (--only-new), overgeslagen")
                continue

        created, skipped, is_new = generate_blog_post(props, existing_index)
        total_created += created
        if is_new:
            total_new += 1

        # Check of er geen content was
        if created == 0 and skipped == 0:
            has_content = any(
                get_rich_text(props, prop_name)
                for prop_name in LANG_TO_CONTENT_PROP.values()
            )
            if not has_content:
                total_no_content += 1

    print(f"\n{'='*55}")
    print(f"📊 Samenvatting:")
    print(f"   Totaal entries in Notion:  {len(entries)}")
    print(f"   Nieuw gegenereerd:         {total_created}")
    print(f"   Nieuw ontdekt (uniek):     {total_new}")
    print(f"   Overgeslagen (bestaand):   {total_existing_skip}")
    print(f"   Geen inhoud (skip):        {total_no_content}")
    print(f"   Gefilterd (status):        {total_filtered}")

    if DRY_RUN:
        print(f"\n💡 Geen bestanden geschreven (dry-run).")
        print(f"   Voer uit zonder --dry-run om bestanden aan te maken.")

    if total_created > 0 and not DRY_RUN:
        print(f"\n💡 Vergeet niet te controleren of de slugs kloppen en")
        print(f"   voer daarna git add/commit/push uit om te publiceren.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
