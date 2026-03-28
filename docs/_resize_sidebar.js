(function () {
    var STORAGE_KEY = 'docsify-sidebar-width';
    var DEFAULT_WIDTH = 300;
    var MIN_WIDTH = 200;
    var MAX_WIDTH = 500;
    var MOBILE_BREAKPOINT = 768;

    function isMobile() {
        return window.innerWidth < MOBILE_BREAKPOINT;
    }

    function clampWidth(width) {
        return Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, width));
    }

    function readStoredWidth() {
        var stored = parseInt(window.localStorage.getItem(STORAGE_KEY), 10);
        return Number.isFinite(stored) ? clampWidth(stored) : DEFAULT_WIDTH;
    }

    function applyWidth(width) {
        if (isMobile()) {
            document.documentElement.style.removeProperty('--docsify-sidebar-width');
            return;
        }

        var nextWidth = clampWidth(width);
        document.documentElement.style.setProperty('--docsify-sidebar-width', nextWidth + 'px');
    }

    function ensureResizableSidebar() {
        var sidebar = document.querySelector('.sidebar');
        if (!sidebar) {
            window.setTimeout(ensureResizableSidebar, 100);
            return;
        }

        if (!sidebar.querySelector('.sidebar-resizer')) {
            var resizer = document.createElement('div');
            var startX = 0;
            var startWidth = 0;

            resizer.className = 'sidebar-resizer';
            resizer.setAttribute('aria-hidden', 'true');

            resizer.addEventListener('mousedown', function (event) {
                if (isMobile()) {
                    return;
                }

                startX = event.clientX;
                startWidth = sidebar.getBoundingClientRect().width;
                document.body.classList.add('sidebar-resizing');

                function handleMouseMove(moveEvent) {
                    var delta = moveEvent.clientX - startX;
                    applyWidth(startWidth + delta);
                }

                function handleMouseUp() {
                    var appliedWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--docsify-sidebar-width'), 10);

                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                    document.body.classList.remove('sidebar-resizing');

                    if (Number.isFinite(appliedWidth)) {
                        window.localStorage.setItem(STORAGE_KEY, String(clampWidth(appliedWidth)));
                    }
                }

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            });

            sidebar.appendChild(resizer);
        }

        applyWidth(readStoredWidth());
    }

    window.addEventListener('resize', function () {
        applyWidth(readStoredWidth());
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ensureResizableSidebar);
    } else {
        ensureResizableSidebar();
    }
})();