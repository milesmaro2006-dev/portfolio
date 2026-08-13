// ===== Navigation Scroll Effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ===== Active Navigation Link =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ===== Console Easter Egg =====
console.log('%c🔐 Amr Shaban | Junior Penetration Tester', 'color: #00ff88; font-size: 18px; font-weight: bold;');
console.log('%cOSCP | CEH | TryHackMe Level 8 - Hacker (Top 15%)', 'color: #00ff88; font-size: 14px;');
console.log('%c🚀 Ready for challenges. Open to work.', 'color: #00ff88; font-size: 14px;');
