(function () {
  var STORAGE_KEY = 'docsify-theme';
  var LIGHT = 'light';
  var DARK = 'dark';
  var BUTTON_ID = 'docsify-theme-toggle';
  var SUN_ICON = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="2" x2="12" y2="5"></line><line x1="12" y1="19" x2="12" y2="22"></line><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"></line><line x1="2" y1="12" x2="5" y2="12"></line><line x1="19" y1="12" x2="22" y2="12"></line><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"></line></g></svg>';
  var MOON_ICON = '<svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" fill="currentColor"><path d="M20.74 14.05A8.26 8.26 0 0 1 9.95 3.26a.75.75 0 0 0-.92-.92A9.75 9.75 0 1 0 21.66 14.97a.75.75 0 0 0-.92-.92z"></path></svg>';

  function applyTheme(theme, lightLink, darkLink, button) {
    var isDark = theme === DARK;

    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    lightLink.disabled = isDark;
    darkLink.disabled = !isDark;

    if (button) {
      button.innerHTML = isDark ? SUN_ICON : MOON_ICON;
      button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      button.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  function placeButton(button) {
    var navbar = document.querySelector('.app-nav');

    if (!navbar || button.parentNode === navbar) {
      return;
    }

    button.style.marginLeft = '8px';
    navbar.appendChild(button);
  }

  function initThemeToggle() {
    var lightLink = document.getElementById('theme-light');
    var darkLink = document.getElementById('theme-dark');

    if (!lightLink || !darkLink) {
      return;
    }

    var savedTheme = localStorage.getItem(STORAGE_KEY);
    var theme = savedTheme === DARK ? DARK : LIGHT;

    var button = document.getElementById(BUTTON_ID);

    if (!button) {
      button = document.createElement('button');
      button.id = BUTTON_ID;
      button.type = 'button';
      button.style.background = 'transparent';
      button.style.border = 'none';
      button.style.cursor = 'pointer';
      button.style.fontSize = '21px';
      button.style.lineHeight = '1';
      button.style.padding = '0';
      button.style.color = 'inherit';
      button.style.verticalAlign = 'middle';

      button.addEventListener('click', function () {
        theme = theme === DARK ? LIGHT : DARK;
        localStorage.setItem(STORAGE_KEY, theme);
        applyTheme(theme, lightLink, darkLink, button);
      });
    }

    applyTheme(theme, lightLink, darkLink, button);
    placeButton(button);

    if (window.$docsify && Array.isArray(window.$docsify.plugins) && !window.$docsify.__themeToggleHookAdded) {
      window.$docsify.__themeToggleHookAdded = true;
      window.$docsify.plugins.push(function (hook) {
        hook.doneEach(function () {
          placeButton(button);
        });
      });
    }

    if (!window.__docsifyThemeToggleObserver) {
      window.__docsifyThemeToggleObserver = new MutationObserver(function () {
        placeButton(button);
      });
      window.__docsifyThemeToggleObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
