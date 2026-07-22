/* ============================================================
   POUCHA SAREES — Interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Sticky header ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Testimonial slider ---------- */
  const slides = document.querySelectorAll('.t-slide');
  const dots = document.querySelectorAll('.t-dot');
  const prevBtn = document.querySelector('.t-prev');
  const nextBtn = document.querySelector('.t-next');
  let current = 0;
  let autoplayTimer;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('is-active'));
    dots.forEach(d => d.classList.remove('is-active'));
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  }

  function nextSlide() { showSlide(current + 1); }
  function prevSlide() { showSlide(current - 1); }

  function startAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, 6000);
  }

  if (slides.length) {
    nextBtn.addEventListener('click', () => { nextSlide(); startAutoplay(); });
    prevBtn.addEventListener('click', () => { prevSlide(); startAutoplay(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); startAutoplay(); }));
    startAutoplay();
  }

  /* ---------- Newsletter form ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email) return;
    newsletterMsg.textContent = `You're on the list — we'll write to ${email} with the next drop.`;
    newsletterForm.reset();
  });

  /* ---------- Contact form ---------- */
  const contactForm = document.getElementById('contactForm');
  const contactMsg = document.getElementById('contactMsg');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    contactMsg.textContent = `Thank you, ${name || 'friend'} — we'll reach out shortly to help you find your drape.`;
    contactForm.reset();
  });

  /* ---------- Enquire buttons on product cards ---------- */
  document.querySelectorAll('.enquire-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name || 'this saree';
      const messageField = document.getElementById('cMessage');
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      if (messageField && !messageField.value) {
        messageField.value = `I'm interested in the ${name}. Could you share availability and price?`;
      }
    });
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
