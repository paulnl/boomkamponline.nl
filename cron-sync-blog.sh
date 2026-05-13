#!/bin/bash
# ===================================================
# Notion → Blog sync cron job
# 
# Dit script wordt aangeroepen door cron en:
# 1. Leest nieuwe entries uit de Notion database
# 2. Genereert Jekyll markdown bestanden
# 3. Commit en pushed naar GitHub
# ===================================================

set -e

cd "$(dirname "$0")"

# Laad Notion API token
# Cron draait in minimale omgeving, dus laad expliciet
if [ -f /home/paul/.config/opencode/.env ]; then
    set -a
    source /home/paul/.config/opencode/.env
    set +a
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Notion → Blog sync start"

# Pull eerst de laatste changes
git pull --rebase --quiet 2>/dev/null || echo "  ⚠ Git pull mislukt, gaat door"

# Genereer nieuwe blog posts
python3 notion-to-jekyll.py --only-new 2>&1

# Check of er nieuwe bestanden zijn
if git status --porcelain _posts/ | grep -q "^?"; then
    echo ""
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Nieuwe blog posts gevonden, committen..."
    git add _posts/
    git commit -m "Blog: automatische sync van Notion ($(date '+%Y-%m-%d'))"
    
    # Push naar GitHub
    git push --quiet 2>&1 || echo "  ⚠ Git push mislukt"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ✅ Gepusht naar GitHub"
else
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] Geen nieuwe posts, niks te doen"
fi

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Gereed"
