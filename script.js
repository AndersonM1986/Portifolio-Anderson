/* JavaScript leve. Não requer bibliotecas, servidor ou banco de dados. */
(() => {
  'use strict';
  const navToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  const desktopLinks = Array.from(document.querySelectorAll('.desktop-nav a'));
  const navSections = desktopLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

  function closeMenu() {
    mobileNav.hidden = true;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menu');
  }
  navToggle.addEventListener('click', () => {
    const opening = mobileNav.hidden;
    mobileNav.hidden = !opening;
    navToggle.setAttribute('aria-expanded', String(opening));
    navToggle.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!mobileNav.hidden && !mobileNav.contains(event.target) && !navToggle.contains(event.target)) closeMenu();
  });

  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.07, rootMargin: '0px 0px -24px 0px'});
    document.documentElement.classList.add('js-enabled');
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        desktopLinks.forEach(link => {
          const current = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', current);
          if (current) link.setAttribute('aria-current','location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin:'-22% 0px -65% 0px'});
    navSections.forEach(section => sectionObserver.observe(section));
  }
})();
