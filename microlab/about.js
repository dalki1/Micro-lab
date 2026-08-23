'use strict';

// ===== Scroll Progress =====
var progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', function () {
  var pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
  if (progressBar) progressBar.style.width = pct + '%';
});

// ===== Navbar =====
var navbar = document.getElementById('navbar');
var navToggle = document.getElementById('navToggle');
var navLinksEl = document.getElementById('navLinks');

window.addEventListener('scroll', function () {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

if (navToggle && navLinksEl) {
  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navLinksEl.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    if (navToggle) navToggle.classList.remove('active');
    if (navLinksEl) navLinksEl.classList.remove('active');
  });
});

// ===== Reveal on scroll =====
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });


