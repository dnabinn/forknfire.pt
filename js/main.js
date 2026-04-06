/* =============================================================
   Fork & Fire — Main JavaScript
============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Navbar: add .scrolled class on scroll ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });


  /* ── 2. Mobile nav toggle ── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
    const isOpen = !mobileNav.classList.contains('hidden');
    mobileNav.classList.toggle('hidden', isOpen);
  });

  // Close mobile nav when any link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.add('hidden'));
  });


  /* ── 3. Scroll-reveal animations (Intersection Observer) ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target); // fire once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));


  /* ── 4. Mobile sticky CTA — hide when reservation section is visible ── */
  const reserveSection = document.getElementById('reserve');
  const stickyCta      = document.getElementById('sticky-cta');

  if (reserveSection && stickyCta) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        stickyCta.classList.toggle('hidden-cta', entry.isIntersecting);
      });
    }, { threshold: 0.15 });

    ctaObserver.observe(reserveSection);
  }


  /* ── 5. Set date input minimum to today ── */
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date();
    const yyyy  = today.getFullYear();
    const mm    = String(today.getMonth() + 1).padStart(2, '0');
    const dd    = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }


  /* ── 6. Hero crossfade slider ── */
  const slides   = document.querySelectorAll('.hero-slide');
  const dots     = document.querySelectorAll('.hero-dot');
  let   current  = 0;
  let   sliderTimer;

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() { goToSlide(current + 1); }

  function startSlider() {
    sliderTimer = setInterval(nextSlide, 6000); // change every 6s
  }

  // Dot click — jump to that slide and reset timer
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(sliderTimer);
      goToSlide(i);
      startSlider();
    });
  });

  if (slides.length > 1) startSlider();


  /* ── 7. Reservation form ── */
  const resForm = document.getElementById('res-form');
  const resBtn  = document.getElementById('res-btn');

  if (resForm && resBtn) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validation check
      const name  = resForm.querySelector('input[type="text"]').value.trim();
      const phone = resForm.querySelector('input[type="tel"]').value.trim();
      const date  = resForm.querySelector('input[type="date"]').value;

      if (!name || !phone || !date) return;

      // Success state
      resBtn.innerHTML = `
        <svg style="width:16px;height:16px;flex-shrink:0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        Request Received — We'll Be in Touch`;

      resBtn.style.background    = 'transparent';
      resBtn.style.border        = '1px solid rgba(201,168,76,0.5)';
      resBtn.style.color         = '#C9A84C';
      resBtn.style.pointerEvents = 'none';
    });
  }

});
