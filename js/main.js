document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight current active page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Optimized Navbar background toggle on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.style.borderBottomColor = '#334155';
            } else {
                navbar.style.borderBottomColor = '#1e293b';
            }
        }, { passive: true });
    }

    // 3. Stats Animation with IntersectionObserver
    const stats = document.querySelectorAll('.stat-number');
    const statsRow = document.querySelector('.stats-row');

    if (statsRow && stats.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stats.forEach(stat => {
                        const targetText = stat.textContent.trim();
                        const isPlus = targetText.includes('+');
                        const isPercent = targetText.includes('%');
                        const numericVal = parseInt(targetText.replace(/[^0-9]/g, ''), 10);

                        if (!isNaN(numericVal)) {
                            let curr = 0;
                            const step = Math.max(1, Math.ceil(numericVal / 20));
                            const interval = setInterval(() => {
                                curr += step;
                                if (curr >= numericVal) {
                                    curr = numericVal;
                                    clearInterval(interval);
                                }
                                stat.textContent = curr + (isPlus ? '+' : '') + (isPercent ? '%' : '');
                            }, 30);
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(statsRow);
    }
});
