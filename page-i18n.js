(function () {
  'use strict';

  // =====================================================================
  // PAGE-SPECIFIEKE I18N-LOADER
  // Gebruikt door /services/* en /work/* (statische pagina's met content.json)
  // Deelt localStorage-key met de homepage: 'boomkamponline-lang'
  // =====================================================================

  var contentData = null;
  var STORAGE_KEY = 'boomkamponline-lang';

  function getNested(obj, path) {
    return path.split('.').reduce(function (cur, key) {
      return (cur && cur[key] !== undefined) ? cur[key] : undefined;
    }, obj);
  }

  function detectLanguage() {
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if (urlLang && contentData && contentData[urlLang]) {
      localStorage.setItem(STORAGE_KEY, urlLang);
      return urlLang;
    }
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && contentData && contentData[stored]) return stored;
    var browserLang = (navigator.language || navigator.userLanguage || '').substring(0, 2);
    if (contentData && contentData[browserLang]) return browserLang;
    return 'nl';
  }

  // Vervang {YEAR} door huidig jaartal
  function replaceYearTokens(str) {
    if (typeof str !== 'string') return str;
    var year = new Date().getFullYear().toString();
    return str.replace(/\{YEAR\}/g, year);
  }

  function applyLanguage(lang) {
    if (!contentData || !contentData[lang]) lang = 'nl';
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-current-lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    var t = contentData[lang];
    if (!t) return;

    var ogLocale = document.getElementById('og-locale');
    if (ogLocale) {
      ogLocale.content = t.og_locale || lang + '_' + lang.toUpperCase();
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = getNested(t, key);
      if (text === undefined) return;
      text = replaceYearTokens(text);
      if (el.tagName === 'META') {
        el.setAttribute('content', text);
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var html = getNested(t, key);
      if (html !== undefined) el.innerHTML = replaceYearTokens(html);
    });

    document.querySelectorAll('[data-i18n-case]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-case');
      var cases = getNested(t, key);
      if (!cases || !Array.isArray(cases)) return;
      var labels = getNested(t, 'work_page.labels') || {};
      var werkItems = (t.werk && t.werk.items) || [];
      el.innerHTML = cases.map(function (c) {
        var tagMatch = werkItems.filter(function (w) { return w.id === c.id; });
        var tag = tagMatch.length ? tagMatch[0].tag : '';
        return '<article class="case-card">' +
          '<div class="case-tag">' + tag + '</div>' +
          '<h2 class="case-title">' + c.title + '</h2>' +
          '<p class="case-client">' + c.client + '</p>' +
          '<div class="case-block"><h3>' + labels.probleem + '</h3><p>' + c.probleem + '</p></div>' +
          '<div class="case-block"><h3>' + labels.aanpak + '</h3><p>' + c.aanpak + '</p></div>' +
          '<div class="case-block case-result"><h3>' + labels.resultaat + '</h3><p>' + c.resultaat + '</p></div>' +
          '</article>';
      }).join('');
    });

    document.querySelectorAll('[data-i18n-list]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-list');
      var list = getNested(t, key);
      if (!list) return;

      // --- Price table rendering (diensten-overzichtspagina) ---
      if (list.price_table && list.price_table.columns && list.price_table.rows) {
        var pt = list.price_table;
        var headerHtml = '<div class="price-table-header"><span class="pt-cell pt-label"></span>' +
          pt.columns.map(function (c) { return '<span class="pt-cell pt-col">' + c + '</span>'; }).join('') +
          '</div>';
        var rowsHtml = pt.rows.map(function (row) {
          return '<div class="price-table-row"><span class="pt-cell pt-label">' + row.label + '</span>' +
            row.values.map(function (v) { return '<span class="pt-cell pt-value">' + v + '</span>'; }).join('') +
            '</div>';
        }).join('');
        el.innerHTML =
          '<div class="service-block">' +
            '<h3 class="h2-section">' + replaceYearTokens(list.title || '') + '</h3>' +
            '<p class="section-subtitle">' + replaceYearTokens(list.subtitle || '') + '</p>' +
            (list.body_p1 ? '<p>' + replaceYearTokens(list.body_p1) + '</p>' : '') +
            (list.body_p2 ? '<p>' + replaceYearTokens(list.body_p2) + '</p>' : '') +
            '<div class="price-table">' + headerHtml + rowsHtml + '</div>' +
          '</div>';
        return;
      }

      // --- Array rendering (bestaand) ---
      if (!Array.isArray(list)) return;
      el.innerHTML = list.map(function (item) {
        if (typeof item === 'string') {
          return '<li>' + replaceYearTokens(item) + '</li>';
        }
        var label = item.name || item.label || '';
        var price = item.price ? '<strong class="price-value">' + replaceYearTokens(item.price) + '</strong>' : '';
        var desc = item.desc ? '<span class="price-desc">' + replaceYearTokens(item.desc) + '</span>' : '';
        var itemHtml = '<span class="price-label">' + label + '</span>' + price + desc;
        if (item.url) {
          return '<li class="service-item"><a href="' + item.url + '">' + itemHtml + '</a></li>';
        }
        return '<li class="price-row">' + itemHtml + '</li>';
      }).join('');
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var text = getNested(t, key);
      if (text !== undefined) el.setAttribute('placeholder', text);
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var val = el.getAttribute('data-i18n-attr');
      var colonPos = val ? val.indexOf(':') : -1;
      if (colonPos === -1) return;
      var attr = val.substring(0, colonPos);
      var key = val.substring(colonPos + 1);
      var text = getNested(t, key);
      if (text !== undefined) el.setAttribute(attr, text);
    });

    document.querySelectorAll('.blog-link').forEach(function (el) {
      el.href = '/blog/?lang=' + lang;
    });
    document.querySelectorAll('.work-link').forEach(function (el) {
      el.href = '/work/?lang=' + lang;
    });

    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description);
    document.querySelector('meta[property="og:title"]')
      ?.setAttribute('content', t.meta.ogtitle);
    document.querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t.meta.ogdescription);

    // Dienstblokken op de overzichtspagina renderen
    renderServiceBlocks(lang);
  }

  // =====================================================================
  // SERVICE BLOCKS RENDERING (diensten-overzichtspagina)
  // Rendert individuele dienst-secties met titel, beschrijving en prijstabel
  // =====================================================================
  function renderServiceBlocks(lang) {
    var container = document.getElementById('service-blocks');
    if (!container) return;
    if (!contentData || !contentData[lang]) return;

    var sp = contentData[lang].services_page;
    if (!sp) return;

    var diensten = ['phpLaravel', 'linuxServer', 'n8nAutomation'];
    var html = '';

    diensten.forEach(function (key) {
      var d = sp[key];
      if (!d) return;

      var priceTableHtml = '';
      if (d.price_table && d.price_table.columns && d.price_table.rows) {
        var pt = d.price_table;
        var headerCells = pt.columns.map(function (c) {
          return '<span class="pt-cell pt-col">' + c + '</span>';
        }).join('');
        var rowsHtml = pt.rows.map(function (row) {
          var cells = row.values.map(function (v) {
            return '<span class="pt-cell pt-value">' + v + '</span>';
          }).join('');
          return '<div class="price-table-row"><span class="pt-cell pt-label">' + row.label + '</span>' + cells + '</div>';
        }).join('');
        priceTableHtml =
          '<div class="price-table">' +
            '<div class="price-table-header"><span class="pt-cell pt-label"></span>' + headerCells + '</div>' +
            rowsHtml +
          '</div>';
      }

      html +=
        '<div class="service-block">' +
          '<h3 class="h2-section">' + replaceYearTokens(d.title || '') + '</h3>' +
          '<p class="section-subtitle">' + replaceYearTokens(d.subtitle || '') + '</p>' +
          (d.body_p1 ? '<p>' + replaceYearTokens(d.body_p1) + '</p>' : '') +
          (d.body_p2 ? '<p>' + replaceYearTokens(d.body_p2) + '</p>' : '') +
          (d.price_title ? '<h4 class="price-block-title">' + replaceYearTokens(d.price_title) + '</h4>' : '') +
          priceTableHtml +
          (d.price_note ? '<p class="price-note">' + replaceYearTokens(d.price_note) + '</p>' : '') +
          (sp.more_label ? '<p class="price-note"><a href="/services/' + key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '') + '/?lang=' + lang + '">' + sp.more_label + ' →</a></p>' : '') +
        '</div>';
    });

    container.innerHTML = html;
  }

  window.switchLang = function (lang) {
    if (contentData && contentData[lang] && lang !== document.documentElement.getAttribute('data-current-lang')) {
      applyLanguage(lang);
    }
  };

  async function init() {
    try {
      var resp = await fetch('/content.json');
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      contentData = await resp.json();
      applyLanguage(detectLanguage());
    } catch (err) {
      console.error('[BoomkampOnline] page-i18n: kan content.json niet laden:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();