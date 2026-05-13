(function () {
  'use strict';

  var contentData = null;
  var currentLang = 'nl';
  var STORAGE_KEY = 'boomkamponline-lang';
  var WEBHOOK_URL = 'https://n8n.synapsisai.nl/webhook/beb1ca46-b6a4-4afd-afb7-75367472088f';

  // Service card icons — remain the same across languages
  var SERVICE_ICONS = [
    // Website bouwen — monitor
    '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    // SEO optimalisatie — cog
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    // AI advies — pie / half-circle
    '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10h-10V2z"/><path d="M22 12A10 10 0 0 0 12 2v10h10z"/></svg>',
    // ZZP verhuur — monitor (alt)
    '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  ];

  // =====================================================================
  // INIT
  // =====================================================================
  async function init() {
    try {
      var resp = await fetch('content.json');
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      contentData = await resp.json();

      currentLang = detectLanguage();
      renderServices();
      renderWerkwijze();
      applyLanguage(currentLang);
      bindEvents();
      observeFadeElements();
    } catch (err) {
      console.error('[BoomkampOnline] Failed to load content.json:', err);
      document.documentElement.lang = 'nl';
      document.documentElement.setAttribute('data-current-lang', 'nl');
      bindEvents(); // still bind UI events so page is interactive
      observeFadeElements();
    }
  }

  // =====================================================================
  // LANGUAGE DETECTION
  // =====================================================================
  function detectLanguage() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && contentData && contentData[stored]) return stored;
    var browserLang = (navigator.language || navigator.userLanguage || '').substring(0, 2);
    if (contentData && contentData[browserLang]) return browserLang;
    return 'nl';
  }

  // =====================================================================
  // NESTED KEY ACCESS — "contact.form.error_email" → obj.contact.form.error_email
  // =====================================================================
  function getNested(obj, path) {
    return path.split('.').reduce(function (cur, key) {
      return (cur && cur[key] !== undefined) ? cur[key] : undefined;
    }, obj);
  }

  // =====================================================================
  // RENDER SERVICES CARDS
  // =====================================================================
  var ICON_MAP = {
    monitor: '<polyline points="23 7 13 17 8 12 1 19"/><polyline points="16 7 23 7 23 14"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  };
  function renderServices() {
    var grid = document.getElementById('diensten-grid');
    if (!grid) return;
    grid.innerHTML = '';
    if (!contentData || !contentData[currentLang]) return;

    var items = contentData[currentLang].diensten.items;
    if (!items || !Array.isArray(items)) return;

    items.forEach(function (item) {
      var iconSvg = ICON_MAP[item.icon] || '';
      var article = document.createElement('article');
      article.className = 'dienst-card fade-up';
      article.innerHTML =
        '<div class="dienst-icon"><svg viewBox="0 0 24 24">' + iconSvg + '</svg></div>' +
        '<div class="dienst-title">' + item.title + '</div>' +
        '<div class="dienst-desc">' + item.description + '</div>';
      grid.appendChild(article);
      if (window.fadeObserver) {
        window.fadeObserver.observe(article);
      }
    });
  }

  // =====================================================================
  // RENDER WERKWIJZE STEPS
  // =====================================================================
  function renderWerkwijze() {
    var container = document.getElementById('werkwijze-steps');
    if (!container) return;
    container.innerHTML = '';
    if (!contentData || !contentData[currentLang]) return;

    var steps = contentData[currentLang].werkwijze.steps;
    if (!steps || !Array.isArray(steps)) return;

    steps.forEach(function (step) {
      var div = document.createElement('div');
      div.className = 'werkwijze-step fade-up';
      div.innerHTML =
        '<div class="werkwijze-number">' + step.number + '</div>' +
        '<div class="werkwijze-title">' + step.title + '</div>' +
        '<div class="werkwijze-desc">' + step.description + '</div>';
      container.appendChild(div);
      if (window.fadeObserver) {
        window.fadeObserver.observe(div);
      }
    });
  }

  // =====================================================================
  // RENDER SELECT OPTIONS
  // =====================================================================
  function renderSelectOptions(selectId, optionsKey) {
    var select = document.getElementById(selectId);
    if (!select) return;
    if (!contentData || !contentData[currentLang]) return;

    var langData = contentData[currentLang];
    var options = getNested(langData, 'contact.form.' + optionsKey);
    if (!options || !Array.isArray(options)) return;

    // Keep the first (placeholder) option, remove the rest
    while (select.options.length > 1) {
      select.remove(1);
    }

    options.forEach(function (text) {
      var opt = document.createElement('option');
      opt.value = text;
      opt.textContent = text;
      select.appendChild(opt);
    });
  }

  // =====================================================================
  // APPLY LANGUAGE
  // =====================================================================
  function applyLanguage(lang) {
    if (!contentData || !contentData[lang]) lang = 'nl';
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Huidige taal op html zetten (vóór render functies, zodat CSS altijd klopt)
    document.documentElement.setAttribute('data-current-lang', lang);

    var t = contentData[lang];
    if (!t) return;

    // HTML lang attribute
    document.documentElement.lang = lang;

    // og:locale meta
    var ogLocale = document.getElementById('og-locale');
    if (ogLocale) {
      ogLocale.content = t.og_locale || lang + '_' + lang.toUpperCase();
    }

    // ----- data-i18n → textContent -----
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

    // ----- data-i18n-html → innerHTML -----
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var html = getNested(t, key);
      if (html !== undefined) el.innerHTML = html;
    });

    // ----- data-i18n-placeholder → placeholder attribute -----
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var text = getNested(t, key);
      if (text !== undefined) el.setAttribute('placeholder', text);
    });

    // ----- data-i18n-attr → any attribute -----
    // Format: data-i18n-attr="attributeName:dot.separated.key"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var val = el.getAttribute('data-i18n-attr');
      var colonPos = val.indexOf(':');
      if (colonPos === -1) return;
      var attr = val.substring(0, colonPos);
      var key = val.substring(colonPos + 1);
      var text = getNested(t, key);
      if (text !== undefined) el.setAttribute(attr, text);
    });

    // ----- Meta tags expliciet bijwerken (redundant met data-i18n-attr, maar veilig) -----
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description);
    document.querySelector('meta[property="og:title"]')
      ?.setAttribute('content', t.meta.ogtitle);
    document.querySelector('meta[property="og:description"]')
      ?.setAttribute('content', t.meta.ogdescription);

    // Re-render dynamic content
    renderServices();
    renderWerkwijze();
    // Opties zijn statisch in HTML met data-i18n — worden vertaald door de handler hierboven

    // Referenties slider opbouwen
    var refItems = t.referenties ? t.referenties.items : null;
    if (refItems) {
      currentSlideRef = 0; // Reset bij taalwissel
      buildSlider(refItems);
    }

    // data-current-lang is al aan het begin van deze functie gezet

    // Hamburger aria-label
    var hamburger = document.getElementById('hamburger');
    if (hamburger) {
      var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-label',
        isOpen ? getNested(t, 'hamburger.close') : getNested(t, 'hamburger.open')
      );
    }

    // Nav aria-label
    var nav = document.getElementById('main-nav');
    if (nav) {
      nav.setAttribute('aria-label', t.nav_label || '');
    }
  }

  // =====================================================================
  // GLOBAL switchLang — called from inline onclick if needed
  // =====================================================================
  window.switchLang = function (lang) {
    if (contentData && contentData[lang] && lang !== currentLang) {
      applyLanguage(lang);
    }
    // Fallback: zet data-current-lang (CSS gebruikt dit voor oranje markering)
    document.documentElement.setAttribute('data-current-lang', lang);
  };

  // =====================================================================
  // BIND UI EVENTS
  // =====================================================================
  function bindEvents() {
    // ----- Language switcher -----
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        if (contentData && contentData[lang] && lang !== currentLang) {
          applyLanguage(lang);
        }
      });
    });

    // ----- Hamburger menu -----
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('main-nav');
    if (hamburger && nav) {
      hamburger.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open);
        var key = open ? 'hamburger.close' : 'hamburger.open';
        var label = contentData ? getNested(contentData[currentLang], key) : '';
        hamburger.setAttribute('aria-label', label || (open ? 'Menu sluiten' : 'Menu openen'));
      });

      document.querySelectorAll('#main-nav a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          var label = contentData ? getNested(contentData[currentLang], 'hamburger.open') : '';
          hamburger.setAttribute('aria-label', label || 'Menu openen');
        });
      });
    }

    // ----- Scroll shadow -----
    var header = document.querySelector('.header');
    function updateHeaderShadow() {
      if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', updateHeaderShadow, { passive: true });
    updateHeaderShadow();

    // ----- Contact form -----
    var form = document.getElementById('contact-form');
    var statusEl = document.getElementById('form-status');
    var submitBtn = document.getElementById('submit-btn');

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var bedrijfsnaam = document.getElementById('bedrijfsnaam').value.trim();
        var contactpersoon = document.getElementById('contactpersoon').value.trim();
        var email = document.getElementById('email').value.trim();
        var telefoonBedrijf = document.getElementById('telefoon_bedrijf').value.trim();
        var telefoonContact = document.getElementById('telefoon_contact').value.trim();
        var woonplaats = document.getElementById('woonplaats').value.trim();
        var branche = document.getElementById('branche').value;
        var reden = document.getElementById('reden').value;
        var bericht = document.getElementById('bericht').value.trim();

        var t = contentData ? contentData[currentLang] : null;

        // Required fields (only contactpersoon, email, bericht)
        if (!contactpersoon || !email || !bericht) {
          statusEl.className = 'form-status error';
          statusEl.textContent = t ? getNested(t, 'contact.form.error') : 'Vul alle verplichte velden in.';
          return;
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          statusEl.className = 'form-status error';
          statusEl.textContent = t ? getNested(t, 'contact.form.error') : 'Voer een geldig emailadres in.';
          return;
        }

        var payload = {
          bedrijfsnaam: bedrijfsnaam,
          contactpersoon: contactpersoon,
          email: email,
          telefoon_bedrijf: telefoonBedrijf || null,
          telefoon_contact: telefoonContact,
          woonplaats: woonplaats,
          branche: branche,
          reden: reden,
          bericht: bericht,
          taal: currentLang,
          timestamp: new Date().toISOString()
        };

        var submitBtnSpan = submitBtn.querySelector('span');
        submitBtn.disabled = true;
        if (submitBtnSpan) {
          submitBtnSpan.textContent = t ? getNested(t, 'contact.form.loading') : 'Versturen...';
        }
        statusEl.className = 'form-status loading';
        statusEl.textContent = t ? getNested(t, 'contact.form.loading') : 'Bericht wordt verzonden...';

        var webhookUrl = WEBHOOK_URL;
        // Als WEBHOOK_URL nog /webhook-test/ bevat, corrigeer naar /webhook/
        webhookUrl = webhookUrl.replace('/webhook-test/', '/webhook/');

        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
          .then(function (response) {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            // Probeer JSON, fallback naar text
            return response.text().then(function (text) {
              try { return JSON.parse(text); } catch (_) { return text; }
            });
          })
          .then(function () {
            statusEl.className = 'form-status success';
            statusEl.textContent = t ? getNested(t, 'contact.form.success') : 'Bedankt voor je bericht!';
            form.reset();
          })
          .catch(function (err) {
            console.error('[BoomkampOnline] Form submit error:', err);
            statusEl.className = 'form-status error';
            statusEl.textContent = t ? getNested(t, 'contact.form.error') : 'Er ging iets mis. Probeer het later opnieuw.';
          })
          .finally(function () {
            submitBtn.disabled = false;
            if (submitBtnSpan) {
              submitBtnSpan.textContent = t ? getNested(t, 'contact.form.submit') : 'Verstuur bericht';
            }
          });
      });
    }
  }

  // =====================================================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // =====================================================================
  function observeFadeElements() {
    var elements = document.querySelectorAll('.fade-up');
    if ('IntersectionObserver' in window && elements.length) {
      window.fadeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            window.fadeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      elements.forEach(function (el) {
        window.fadeObserver.observe(el);
      });
    } else {
      elements.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  // =====================================================================
  // REFERENTIES SLIDER
  // =====================================================================
  var currentSlideRef = 0;
  var totalSlidesRef = 0;

  function buildSlider(items) {
    var slider = document.getElementById('ref-slider');
    var dotsContainer = document.getElementById('ref-dots');
    var prevBtn = document.getElementById('ref-prev');
    var nextBtn = document.getElementById('ref-next');

    if (!slider || !items || items.length === 0) return;

    totalSlidesRef = items.length;

    // Kaartjes bouwen
    slider.innerHTML = items.map(function (item) {
      var logoHtml = item.logo
        ? '<img src="' + item.logo + '" alt="' + item.bedrijf + ' logo" width="180" height="48" loading="lazy" decoding="async" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\'"><span class="ref-logo-text" style="display:none">' + item.bedrijf + '</span>'
        : '<span class="ref-logo-text">' + item.bedrijf + '</span>';

      var resultaatHtml = item.resultaat
        ? '<div class="ref-resultaat">' + item.resultaat + '</div>'
        : '';

      var urlHtml = item.url
        ? '<a href="' + item.url + '" class="ref-url" target="_blank" rel="noopener noreferrer">' + item.url.replace('https://', '') + '</a>'
        : '';

      return '<div class="ref-card">' +
        '<div class="ref-card-inner">' +
          '<div class="ref-card-left">' +
            '<div class="ref-logo-wrap">' + logoHtml + '</div>' +
            '<span class="ref-sector">' + item.sector + '</span>' +
            '<div class="ref-tags">' +
              item.diensten.map(function (d) { return '<span class="ref-tag">' + d + '</span>'; }).join('') +
            '</div>' +
            resultaatHtml +
          '</div>' +
          '<div class="ref-card-right">' +
            '<span class="ref-quote-mark">&ldquo;</span>' +
            '<p class="ref-quote">' + item.quote + '</p>' +
            '<span class="ref-author">' + item.naam + '</span>' +
            urlHtml +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    // Dots bouwen
    if (dotsContainer) {
      dotsContainer.innerHTML = items.map(function (_, i) {
        return '<button class="ref-dot' + (i === 0 ? ' active' : '') + '" ' +
               'aria-label="Ga naar referentie ' + (i + 1) + '" ' +
               'onclick="goToSlide(' + i + ')"></button>';
      }).join('');
    }

    // Pijlen verbergen als maar 1 item
    if (totalSlidesRef <= 1) {
      if (prevBtn) prevBtn.classList.add('hidden');
      if (nextBtn) nextBtn.classList.add('hidden');
      if (dotsContainer) dotsContainer.style.display = 'none';
    }

    // Event listeners pijlen
    if (prevBtn) prevBtn.addEventListener('click', function () { goToSlide(currentSlideRef - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goToSlide(currentSlideRef + 1); });

    // Touch/swipe support
    (function () {
      var touchStartX = 0;
      slider.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });
      slider.addEventListener('touchend', function (e) {
        var diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          goToSlide(diff > 0 ? currentSlideRef + 1 : currentSlideRef - 1);
        }
      }, { passive: true });
    })();
  }

  function goToSlide(index) {
    var slider = document.getElementById('ref-slider');
    var dots = document.querySelectorAll('.ref-dot');

    if (!slider || totalSlidesRef === 0) return;

    // Loop rond
    currentSlideRef = ((index % totalSlidesRef) + totalSlidesRef) % totalSlidesRef;

    slider.style.transform = 'translateX(-' + currentSlideRef * 100 + '%)';

    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlideRef);
    });
  }

  // Maak goToSlide globaal beschikbaar (voor onclick in dots)
  window.goToSlide = goToSlide;

  // =====================================================================
  // START
  // =====================================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Service Worker registreren
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js')
        .then(function () { console.log('SW geregistreerd'); })
        .catch(function (err) { console.log('SW fout:', err); });
    });
  }

})();
