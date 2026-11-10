/**
 * CreateBiz - Main JavaScript
 * Header Megamenu Hover Interaction & Buffer
 */
document.addEventListener('DOMContentLoaded', function () {
    const megamenuContainers = document.querySelectorAll('.site-header .has-megamenu');

    megamenuContainers.forEach(function (container) {
        const menu = container.querySelector('.megamenu');
        if (!menu) return;

        let closeTimer = null;

        function openMenu() {
            if (window.innerWidth < 992) return;
            if (closeTimer) {
                clearTimeout(closeTimer);
                closeTimer = null;
            }
            container.classList.add('is-hovered');
            menu.style.display = 'block';
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.pointerEvents = 'auto';
        }

        function closeMenu() {
            if (window.innerWidth < 992) return;
            if (closeTimer) clearTimeout(closeTimer);
            closeTimer = setTimeout(function () {
                container.classList.remove('is-hovered');
                menu.style.display = '';
                menu.style.opacity = '';
                menu.style.visibility = '';
                menu.style.pointerEvents = '';
            }, 300);
        }

        container.addEventListener('mouseenter', openMenu);
        container.addEventListener('mouseleave', closeMenu);
        menu.addEventListener('mouseenter', openMenu);
        menu.addEventListener('mouseleave', closeMenu);
    });
});

