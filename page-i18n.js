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
      if (el.tagName === 'META') {
        el.setAttribute('content', text);
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var html = getNested(t, key);
      if (html !== undefined) el.innerHTML = html;
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
      if (!list || !Array.isArray(list)) return;
      el.innerHTML = list.map(function (item) {
        if (typeof item === 'string') {
          return '<li>' + item + '</li>';
        }
        var label = item.name || item.label || '';
        var price = item.price ? '<strong class="price-value">' + item.price + '</strong>' : '';
        var desc = item.desc ? '<span class="price-desc">' + item.desc + '</span>' : '';
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