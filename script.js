(() => {
  'use strict';

  /* ===== テーマ ===== */
  const html        = document.documentElement;
  const themeBtn    = document.getElementById('theme-toggle');
  const THEME_KEY   = 'theme';

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    themeBtn.textContent    = theme === 'dark' ? '🌙' : '☀️';
    themeBtn.setAttribute('aria-pressed', String(theme === 'light'));
    localStorage.setItem(THEME_KEY, theme);
  }

  const savedTheme = localStorage.getItem(THEME_KEY)
    || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(savedTheme);

  themeBtn.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ===== 言語 ===== */
  const langBtn   = document.getElementById('lang-toggle');
  const LANG_KEY  = 'lang';

  function applyLang(lang) {
    html.setAttribute('lang', lang);
    langBtn.textContent = lang === 'ja' ? 'JP' : 'EN';
    langBtn.setAttribute('aria-pressed', String(lang === 'en'));
    localStorage.setItem(LANG_KEY, lang);

    document.querySelectorAll('[data-i18n-jp]').forEach(el => {
      const text = lang === 'ja'
        ? el.getAttribute('data-i18n-jp')
        : el.getAttribute('data-i18n-en');
      if (text !== null) el.textContent = text;
    });
  }

  const savedLang = localStorage.getItem(LANG_KEY)
    || (navigator.language.startsWith('ja') ? 'ja' : 'en');
  applyLang(savedLang);

  langBtn.addEventListener('click', () => {
    applyLang(html.getAttribute('lang') === 'ja' ? 'en' : 'ja');
  });

  /* ===== IntersectionObserver (reveal) ===== */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

})();
