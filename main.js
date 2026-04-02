/* ═══════════════════════════════════════════
   MAIN.JS — Shared Portfolio JavaScript
   ═══════════════════════════════════════════ */

// ─── LOADER ───
window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    window.setTimeout(() => {
        document.body.classList.remove('is-loading');
        if (loader) loader.classList.add('is-hidden');
    }, 450);
});

document.addEventListener('DOMContentLoaded', function () {

    // ─── THEME TOGGLE ───
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        const toggleTheme = (e) => {
            e.preventDefault();
            const html = document.documentElement;
            const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        };
        themeToggleBtn.addEventListener('click', toggleTheme);
        themeToggleBtn.addEventListener('touchstart', toggleTheme, { passive: false });
    }

    // ─── ACTIVE NAV HIGHLIGHTING ───
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a[data-page]').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (currentPage === linkPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('nav-active');
        }
    });

    // ─── PAGE TRANSITIONS ───
    const transition = document.getElementById('pageTransition');
    document.querySelectorAll('a[data-nav]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;
            e.preventDefault();
            if (transition) {
                transition.classList.add('active');
                setTimeout(() => { window.location.href = href; }, 350);
            } else {
                window.location.href = href;
            }
        });
    });

    // ─── NAVIGATION SCROLL SHOW/HIDE ───
    const navbar = document.querySelector('nav');
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    navbar.style.transform = 'translateX(-50%) translateY(120%)';
                    navbar.style.opacity = '0';
                } else {
                    navbar.style.transform = 'translateX(-50%) translateY(0)';
                    navbar.style.opacity = '1';
                }
                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ─── NOTEPAD PARALLAX ───
    window.addEventListener('scroll', () => {
        const notepadBg = document.querySelector('.notepad-bg');
        if (notepadBg) {
            notepadBg.style.transform = `translateY(${window.pageYOffset * 0.1}px)`;
        }
    });

    // ─── SCROLL REVEAL ───
    const io2 = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.rv, .rvl').forEach(el => io2.observe(el));

    // ─── SECTION FADE-IN ───
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // ─── ANIMATED STAT COUNTERS ───
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length) {
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = 'true';
                    const target = parseInt(entry.target.dataset.target, 10);
                    const suffix = entry.target.dataset.suffix || '';
                    const duration = 1800;
                    const start = performance.now();

                    function animate(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        entry.target.textContent = Math.round(target * eased) + suffix;
                        if (progress < 1) requestAnimationFrame(animate);
                    }
                    requestAnimationFrame(animate);
                }
            });
        }, { threshold: 0.3 });

        statNumbers.forEach(el => countObserver.observe(el));
    }

    // ─── FAQ ACCORDION ───
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            // Close all first
            document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
            // Toggle current
            if (!isOpen) item.classList.add('open');
        });
    });

    // ─── AUTO-SELECT CONTACT SERVICE FROM URL ───
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
        const selectEl = document.getElementById('service');
        if (selectEl) {
            selectEl.value = serviceParam;
        }
    }

});

// End of file
