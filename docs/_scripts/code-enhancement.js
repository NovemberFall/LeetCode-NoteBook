(function () {
  var BUTTON_CLASS = 'code-copy-button';
  var TOOLTIP_CLASS = 'code-copy-tooltip';
  var TOOLTIP_VISIBLE_CLASS = 'is-visible';
  var TOOLTIP_EXIT_CLASS = 'is-hiding';
  var TOOLTIP_TEXT = 'Copied';
  var TOOLTIP_VISIBLE_DELAY = 1100;
  var TOOLTIP_EXIT_DURATION = 180;
  var LABEL_CLASS = 'code-language-label';
  var COPY_ICON = '<svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 9.75A1.75 1.75 0 0 1 10.75 8h7.5A1.75 1.75 0 0 1 20 9.75v7.5A1.75 1.75 0 0 1 18.25 19h-7.5A1.75 1.75 0 0 1 9 17.25z"></path><path d="M6.75 15.5A1.75 1.75 0 0 1 5 13.75v-8A1.75 1.75 0 0 1 6.75 4h8A1.75 1.75 0 0 1 16.5 5.75"></path></svg>';

  function getLanguageLabel(codeBlock, pre) {
    var source = (codeBlock.className || '') + ' ' + (pre.className || '');
    var match = source.match(/(?:^|\s)language-([a-z0-9#+-]+)/i);

    if (!match && pre.getAttribute('data-lang')) {
      match = [null, pre.getAttribute('data-lang')];
    }

    if (!match && pre.getAttribute('data-info')) {
      match = [null, pre.getAttribute('data-info')];
    }

    if (!match) {
      return null;
    }

    return match[1].toLowerCase();
  }

  function copyText(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', 'true');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
        document.body.removeChild(textarea);
        resolve();
      } catch (error) {
        document.body.removeChild(textarea);
        reject(error);
      }
    });
  }

  function removeTooltip(tooltip, pre) {
    if (!tooltip || !pre.contains(tooltip)) {
      return;
    }

    tooltip.classList.remove(TOOLTIP_VISIBLE_CLASS);
    tooltip.classList.add(TOOLTIP_EXIT_CLASS);

    window.clearTimeout(tooltip._removeTimer);
    tooltip._removeTimer = window.setTimeout(function () {
      if (pre.contains(tooltip)) {
        pre.removeChild(tooltip);
      }
    }, TOOLTIP_EXIT_DURATION);
  }

  function showTooltip(button) {
    var pre = button.parentNode;
    var tooltip = pre.querySelector('.' + TOOLTIP_CLASS);

    if (!tooltip) {
      tooltip = document.createElement('span');
      tooltip.className = TOOLTIP_CLASS;
      tooltip.textContent = TOOLTIP_TEXT;
      pre.appendChild(tooltip);
    }

    window.clearTimeout(tooltip._hideTimer);
    window.clearTimeout(tooltip._removeTimer);

    tooltip.classList.remove(TOOLTIP_EXIT_CLASS);

    requestAnimationFrame(function () {
      tooltip.classList.add(TOOLTIP_VISIBLE_CLASS);
    });

    tooltip._hideTimer = window.setTimeout(function () {
      removeTooltip(tooltip, pre);
    }, TOOLTIP_VISIBLE_DELAY);
  }

  function enhanceCodeBlocks() {
    var codeBlocks = document.querySelectorAll('pre > code');

    codeBlocks.forEach(function (codeBlock) {
      var pre = codeBlock.parentNode;
      var labelText;

      if (!pre || pre.querySelector('.' + BUTTON_CLASS)) {
        return;
      }

      labelText = getLanguageLabel(codeBlock, pre);

      if (labelText && !pre.querySelector('.' + LABEL_CLASS)) {
        var label = document.createElement('span');
        label.className = LABEL_CLASS;
        label.textContent = labelText;
        pre.appendChild(label);
      }

      var button = document.createElement('button');
      button.type = 'button';
      button.className = BUTTON_CLASS;
      button.setAttribute('aria-label', 'Copy code to clipboard');
      button.innerHTML = COPY_ICON;

      button.addEventListener('click', function () {
        copyText(codeBlock.textContent).then(function () {
          showTooltip(button);
        }).catch(function () {
          showTooltip(button);
        });
      });

      pre.appendChild(button);
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = window.$docsify.plugins || [];
  window.$docsify.plugins.push(function (hook) {
    hook.doneEach(function () {
      enhanceCodeBlocks();
    });
  });
})();
