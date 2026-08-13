// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', function() {

    // ===== Active Navigation Link =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== Navbar Background on Scroll =====
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.backgroundColor = '#0a0a0a';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.8)';
        } else {
            navbar.style.backgroundColor = '#0d0d0d';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // ===== Stats Counter Animation =====
    const stats = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        stats.forEach(stat => {
            const text = stat.textContent;
            const isPercentage = text.includes('%');
            const isPlus = text.includes('+');
            const cleanText = text.replace(/[^0-9]/g, '');
            const value = parseInt(cleanText);
            
            if (!isNaN(value)) {
                let current = 0;
                const increment = Math.ceil(value / 30);
                const duration = 800;
                const stepTime = duration / 30;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= value) {
                        current = value;
                        clearInterval(timer);
                    }
                    let displayText = current.toString();
                    if (isPlus) displayText += '+';
                    if (isPercentage) displayText += '%';
                    stat.textContent = displayText;
                }, stepTime);
            }
        });
    }

    // ===== Intersection Observer for Stats =====
    const statsRow = document.querySelector('.stats-row');
    if (statsRow) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsRow);
    }

    // ===== Console Easter Egg =====
    console.log('%c🔐 Amr Shaban Sayed | Junior Penetration Tester', 'color: #00ff41; font-size: 20px; font-weight: bold;');
    console.log('%cOSCP • CEH • TryHackMe Level 8 - Hacker', 'color: #00ff41; font-size: 14px;');
    console.log('%c5 Security Projects • 41+ Labs • Top 15%', 'color: #888888; font-size: 13px;');
    console.log('%c🚀 Ready for challenges.', 'color: #00ff41; font-size: 14px;');

    // ===== Keyboard Shortcut (Easter Egg) =====
    document.addEventListener('keydown', function(e) {
        if (e.key === 'h' && e.ctrlKey) {
            e.preventDefault();
            alert('🔐 Amr Shaban Sayed\nJunior Penetration Tester\nOSCP • CEH\nTryHackMe Level 8 - Hacker');
        }
    });

    // ===== External Links Open in New Tab =====
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

});
