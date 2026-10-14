// AVIAL Maritime Consultancy Services — cadetship exam page interactions

(function () {
  'use strict';

  const backToTop = document.getElementById('backToTop');

  // Current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Back-to-top visibility on scroll
  function onScroll() {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Scroll-reveal animations
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
})();
