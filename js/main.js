// ===== Smooth Scroll for Navigation =====
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ===== Active Nav Link =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// ===== Console Easter Egg =====
console.log('%c🔐 Amr Shaban | Junior Penetration Tester', 'color: #00ff41; font-size: 18px; font-weight: bold;');
console.log('%cOSCP | CEH | TryHackMe Level 8 - Hacker', 'color: #00ff41; font-size: 14px;');
console.log('%c🚀 Ready for challenges.', 'color: #00ff41; font-size: 14px;');
