/* =============================================================
   Fork & Fire — Main JavaScript
============================================================= */

/* ── Translations ── */
const T = {
  en: {
    /* Nav */
    'nav.about':      'About',
    'nav.menu':       'Menu',
    'nav.experience': 'Experience',
    'nav.reviews':    'Reviews',
    'nav.contact':    'Contact',
    'nav.reserve':    'Reserve',
    'nav.reserve2':   'Reserve a Table',

    /* Hero */
    'hero.location': 'Lisbon, Portugal',
    'hero.h1':       'Where Flavour<br><em class="not-italic text-gold">Meets Fire.</em>',
    'hero.sub':      'Premium sushi. Flame-grilled meats. Indian curries. Asian classics. Four cuisines, one extraordinary address.',
    'hero.cta1':     'Reserve Your Table',
    'hero.cta2':     'View Menu',
    'hero.scroll':   'Scroll',

    /* About */
    'about.label': 'Our Story',
    'about.h':     'Crafted for the<br><em class="not-italic text-gold">Curious Palate.</em>',
    'about.p1':    'Fork & Fire was born from one belief: great food has no borders. We bring together the precision of Japanese sushi, the boldness of flame-grilled meats, the depth of Indian spices, and the comfort of Asian classics — all under one roof in the heart of Lisbon.',
    'about.p2':    'Every ingredient is sourced with intention. Every dish crafted with care. The result feels both familiar and entirely new.',
    'about.s1':    'Cuisines',
    'about.s2':    'Dishes',
    'about.s3':    'Address',

    /* Experience */
    'exp.label': 'The Experience',
    'exp.h':     'A Smarter Way<br>to <em class="not-italic text-gold">Dine.</em>',
    'exp.sub':   'Technology and hospitality in harmony —<br>so your evening flows exactly as it should.',
    'exp.c1.t':  'Order at Your Table',
    'exp.c1.d':  'A sleek tablet at every table. Browse, customise, and order exactly when you\'re ready.',
    'exp.c2.t':  'No Waiting',
    'exp.c2.d':  'Your time is precious. No flagging down staff. Your order goes straight to the kitchen.',
    'exp.c3.t':  'Always Accurate',
    'exp.c3.d':  'No missed modifications. Your dish arrives exactly the way you ordered it, every time.',
    'exp.c4.t':  'Seamless Flow',
    'exp.c4.d':  'From first course to final bite — a dining experience that keeps pace with your evening.',

    /* Menu */
    'menu.label':   'Menu Highlights',
    'menu.h':       'Four Cuisines.<br><em class="not-italic text-gold">One Table.</em>',
    'menu.explore': 'Explore',
    'menu.cta':     'Reserve to Experience the Full Menu',
    'menu.s1.cat':  'Japanese',
    'menu.s1.t':    'Premium Sushi',
    'menu.s1.d':    'Hand-crafted nigiri, maki, and sashimi. Fresh catches, expert cuts, flavours that speak for themselves.',
    'menu.s2.cat':  'Flame-Grilled',
    'menu.s2.t':    'Grill Specialties',
    'menu.s2.d':    'Premium cuts over open flame. Bold char, tender centre, and that unmistakable smokiness.',
    'menu.s3.cat':  'Indian',
    'menu.s3.t':    'Indian Curries',
    'menu.s3.d':    'Slow-cooked sauces with layered spice. Rich, aromatic, made with whole ingredients — never a shortcut.',
    'menu.s4.cat':  'Asian',
    'menu.s4.t':    'Rice & Noodles',
    'menu.s4.d':    'Wok-fired classics with depth and heat. Fried rice, pad thai, and noodle dishes that hit every note.',

    /* Ambiance */
    'amb.label': 'The Space',
    'amb.h':     'An Ambiance Worth<br><em class="not-italic text-gold">Arriving For.</em>',
    'amb.p1':    'Designed to make every visit feel like an occasion. Low lighting, refined details, and a space that adapts — whether you\'re celebrating, connecting, or simply unwinding.',
    'amb.p2':    'Intimate seating for two. Long tables for groups. Private corners for evenings that deserve their own world.',
    'amb.t1':    'Modern Interior',
    'amb.t2':    'Group Dining',
    'amb.t3':    'Date Night',
    'amb.t4':    'Private Events',

    /* Reservation */
    'res.label':    'Reservations',
    'res.h':        'Secure Your <em class="not-italic text-gold">Table.</em>',
    'res.sub':      'Reserve in minutes. Show up to something worth looking forward to.',
    'res.name':     'Full Name',
    'res.phone':    'Phone Number',
    'res.date':     'Date',
    'res.time':     'Time',
    'res.guests':   'Number of Guests',
    'res.notes':    'Notes / Special Requests (optional)',
    'res.btn':      'Book Your Table',
    'res.note':     'We\'ll confirm your reservation by phone within 24 hours.',
    'res.ph.name':  'Your name',
    'res.ph.phone': '+351 000 000 000',
    'res.ph.time':  'Select a time',
    'res.ph.notes': 'Allergies, dietary requirements, special occasions...',
    'res.g1': '1 Guest',  'res.g2': '2 Guests', 'res.g3': '3 Guests',
    'res.g4': '4 Guests', 'res.g5': '5 Guests', 'res.g6': '6+ Guests',
    'res.ok':  'Request Received — We\'ll Be in Touch',
    'res.err': 'Something went wrong. Please call us directly.',

    /* Reviews */
    'reviews.label': 'Guest Reviews',
    'reviews.h':     'What Our <em class="not-italic text-gold">Guests Say.</em>',
    'reviews.on':    'on Google',
    'reviews.cta':   'Leave Us a Review on Google',

    /* Instagram */
    'insta.label': 'Instagram',
    'insta.h':     'Life at <em class="not-italic text-gold">Fork &amp; Fire.</em>',
    'insta.cta':   'Follow on Instagram',

    /* Contact */
    'contact.label':     'Find Us',
    'contact.h':         'Come <em class="not-italic text-gold">Visit Us.</em>',
    'contact.addr':      'Address',
    'contact.phone':     'Phone',
    'contact.email':     'Email',
    'contact.hours':     'Opening Hours',
    'contact.mon':       'Monday',
    'contact.mon.val':   'Closed',
    'contact.sat':       'Tue – Sun · Lunch',
    'contact.sun':       'Tue – Sun · Dinner',
    'contact.map':       'Open in Google Maps',

    /* Footer */
    'footer.hours': 'Opening Hours',
    'footer.social':'Follow Us',
    'footer.about': 'Four cuisines. One address.<br>An experience worth every visit.',
    'footer.mon':   'Monday',
    'footer.sat':   'Tue – Sun · Lunch',
    'footer.sun':   'Tue – Sun · Dinner',
    'footer.copy':  '© 2025 Fork & Fire. All rights reserved.',
    'footer.tag':   'Where Flavour Meets Fire.',

    /* Sticky */
    'sticky.cta': 'Reserve Your Table',
  },

  pt: {
    /* Nav */
    'nav.about':      'Sobre',
    'nav.menu':       'Menu',
    'nav.experience': 'Experiência',
    'nav.reviews':    'Avaliações',
    'nav.contact':    'Contacto',
    'nav.reserve':    'Reservar',
    'nav.reserve2':   'Reservar Mesa',

    /* Hero */
    'hero.location': 'Lisboa, Portugal',
    'hero.h1':       'Onde o Sabor<br><em class="not-italic text-gold">Encontra o Fogo.</em>',
    'hero.sub':      'Sushi premium. Carnes grelhadas a fogo. Curries indianos. Clássicos asiáticos. Quatro cozinhas, um endereço extraordinário.',
    'hero.cta1':     'Reserve a Sua Mesa',
    'hero.cta2':     'Ver Menu',
    'hero.scroll':   'Scroll',

    /* About */
    'about.label': 'A Nossa História',
    'about.h':     'Criado para o<br><em class="not-italic text-gold">Paladar Curioso.</em>',
    'about.p1':    'Fork & Fire nasceu de uma crença: a boa gastronomia não tem fronteiras. Reunimos a precisão do sushi japonês, a ousadia das carnes grelhadas a fogo, a profundidade das especiarias indianas e o conforto dos clássicos asiáticos — tudo sob o mesmo teto, no coração de Lisboa.',
    'about.p2':    'Cada ingrediente é selecionado com intenção. Cada prato preparado com cuidado. O resultado é ao mesmo tempo familiar e completamente novo.',
    'about.s1':    'Cozinhas',
    'about.s2':    'Pratos',
    'about.s3':    'Morada',

    /* Experience */
    'exp.label': 'A Experiência',
    'exp.h':     'Uma Forma Mais Inteligente<br>de <em class="not-italic text-gold">Jantar.</em>',
    'exp.sub':   'Tecnologia e hospitalidade em harmonia —<br>para que a sua noite decorra exatamente como deve ser.',
    'exp.c1.t':  'Peça na Sua Mesa',
    'exp.c1.d':  'Um tablet elegante em cada mesa. Explore, personalize e peça quando estiver pronto.',
    'exp.c2.t':  'Sem Esperas',
    'exp.c2.d':  'O seu tempo é precioso. Sem chamar funcionários. O seu pedido vai diretamente para a cozinha.',
    'exp.c3.t':  'Sempre Preciso',
    'exp.c3.d':  'Sem modificações em falta. O seu prato chega exatamente como pediu, sempre.',
    'exp.c4.t':  'Experiência Fluida',
    'exp.c4.d':  'Do primeiro prato ao último bocado — uma experiência gastronómica que acompanha o ritmo da sua noite.',

    /* Menu */
    'menu.label':   'Destaques do Menu',
    'menu.h':       'Quatro Cozinhas.<br><em class="not-italic text-gold">Uma Mesa.</em>',
    'menu.explore': 'Explorar',
    'menu.cta':     'Reserve para Experienciar o Menu Completo',
    'menu.s1.cat':  'Japonesa',
    'menu.s1.t':    'Sushi Premium',
    'menu.s1.d':    'Nigiri, maki e sashimi artesanais. Pescado fresco, cortes precisos, sabores que falam por si.',
    'menu.s2.cat':  'Grelhado a Fogo',
    'menu.s2.t':    'Especialidades da Grelha',
    'menu.s2.d':    'Cortes premium sobre chama viva. Exterior marcado, interior tenro e aquele fumado inconfundível.',
    'menu.s3.cat':  'Indiana',
    'menu.s3.t':    'Curries Indianos',
    'menu.s3.d':    'Molhos de cozedura lenta com especiarias em camadas. Ricos, aromáticos, feitos com ingredientes inteiros — sem atalhos.',
    'menu.s4.cat':  'Asiática',
    'menu.s4.t':    'Arroz & Noodles',
    'menu.s4.d':    'Clássicos salteados em wok com profundidade e calor. Arroz frito, pad thai e pratos de noodles que acertam em todas as notas.',

    /* Ambiance */
    'amb.label': 'O Espaço',
    'amb.h':     'Um Ambiente que Vale<br><em class="not-italic text-gold">a Pena Visitar.</em>',
    'amb.p1':    'Concebido para que cada visita pareça uma ocasião especial. Iluminação suave, detalhes refinados e um espaço que se adapta — seja para celebrar, conviver ou simplesmente relaxar.',
    'amb.p2':    'Lugares íntimos para dois. Mesas compridas para grupos. Cantos privados para noites que merecem o seu próprio mundo.',
    'amb.t1':    'Interior Moderno',
    'amb.t2':    'Jantares em Grupo',
    'amb.t3':    'Noite a Dois',
    'amb.t4':    'Eventos Privados',

    /* Reservation */
    'res.label':    'Reservas',
    'res.h':        'Garanta a Sua <em class="not-italic text-gold">Mesa.</em>',
    'res.sub':      'Reserve em minutos. Apareça para algo que vale a pena antecipar.',
    'res.name':     'Nome Completo',
    'res.phone':    'Número de Telefone',
    'res.date':     'Data',
    'res.time':     'Hora',
    'res.guests':   'Nº de Convidados',
    'res.notes':    'Notas / Pedidos Especiais (opcional)',
    'res.btn':      'Reservar Mesa',
    'res.note':     'Confirmaremos a sua reserva por telefone em 24 horas.',
    'res.ph.name':  'O seu nome',
    'res.ph.phone': '+351 000 000 000',
    'res.ph.time':  'Selecionar hora',
    'res.ph.notes': 'Alergias, requisitos alimentares, ocasiões especiais...',
    'res.g1': '1 Convidado',  'res.g2': '2 Convidados', 'res.g3': '3 Convidados',
    'res.g4': '4 Convidados', 'res.g5': '5 Convidados', 'res.g6': '6+ Convidados',
    'res.ok':  'Pedido Recebido — Entraremos em Contacto',
    'res.err': 'Algo correu mal. Por favor ligue-nos diretamente.',

    /* Reviews */
    'reviews.label': 'Avaliações',
    'reviews.h':     'O Que Dizem os Nossos <em class="not-italic text-gold">Clientes.</em>',
    'reviews.on':    'no Google',
    'reviews.cta':   'Deixe a Sua Avaliação no Google',

    /* Instagram */
    'insta.label': 'Instagram',
    'insta.h':     'A Vida no <em class="not-italic text-gold">Fork &amp; Fire.</em>',
    'insta.cta':   'Seguir no Instagram',

    /* Contact */
    'contact.label':     'Encontre-nos',
    'contact.h':         'Venha <em class="not-italic text-gold">Visitar-nos.</em>',
    'contact.addr':      'Morada',
    'contact.phone':     'Telefone',
    'contact.email':     'E-mail',
    'contact.hours':     'Horário de Funcionamento',
    'contact.mon':       'Segunda-feira',
    'contact.mon.val':   'Encerrado',
    'contact.sat':       'Ter – Dom · Almoço',
    'contact.sun':       'Ter – Dom · Jantar',
    'contact.map':       'Abrir no Google Maps',

    /* Footer */
    'footer.hours': 'Horário',
    'footer.social':'Siga-nos',
    'footer.about': 'Quatro cozinhas. Uma morada.<br>Uma experiência que vale cada visita.',
    'footer.mon':   'Segunda-feira',
    'footer.sat':   'Ter – Dom · Almoço',
    'footer.sun':   'Ter – Dom · Jantar',
    'footer.copy':  '© 2025 Fork & Fire. Todos os direitos reservados.',
    'footer.tag':   'Onde o Sabor Encontra o Fogo.',

    /* Sticky */
    'sticky.cta': 'Reserve a Sua Mesa',
  }
};

/* ── Language switcher ── */
let currentLang = localStorage.getItem('ff-lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ff-lang', lang);
  document.documentElement.lang = lang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = T[lang][el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  // innerHTML (headings with <em>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = T[lang][el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = T[lang][el.dataset.i18nPh];
    if (val !== undefined) el.placeholder = val;
  });

  // Select options
  const selOpts = {
    '#sel-time':   'res.ph.time',
    '#sel-g1':     'res.g1',
    '#sel-g2':     'res.g2',
    '#sel-g3':     'res.g3',
    '#sel-g4':     'res.g4',
    '#sel-g5':     'res.g5',
    '#sel-g6':     'res.g6',
  };
  Object.entries(selOpts).forEach(([sel, key]) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = T[lang][key];
  });

  // Active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}


document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Navbar scroll effect ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });


  /* ── 2. Mobile nav toggle ── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.add('hidden'));
  });


  /* ── 3. Language buttons ── */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Apply saved/default language on load
  setLanguage(currentLang);


  /* ── 4. Scroll-reveal animations ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));


  /* ── 5. Mobile sticky CTA — hide when reservation section visible ── */
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


  /* ── 6. Set date input minimum to today ── */
  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    const today = new Date();
    const yyyy  = today.getFullYear();
    const mm    = String(today.getMonth() + 1).padStart(2, '0');
    const dd    = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }


  /* ── 7. Hero crossfade slider ── */
  const slides  = document.querySelectorAll('.hero-slide');
  const dots    = document.querySelectorAll('.hero-dot');
  let   current = 0;
  let   sliderTimer;

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startSlider() {
    sliderTimer = setInterval(() => goToSlide(current + 1), 6000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(sliderTimer);
      goToSlide(i);
      startSlider();
    });
  });

  if (slides.length > 1) startSlider();


  /* ── 8. Reservation form — AJAX to contact.php ── */
  const resForm = document.getElementById('res-form');
  const resBtn  = document.getElementById('res-btn');

  if (resForm && resBtn) {
    resForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name  = resForm.querySelector('input[name="name"]').value.trim();
      const phone = resForm.querySelector('input[name="phone"]').value.trim();
      const date  = resForm.querySelector('input[name="date"]').value;
      if (!name || !phone || !date) return;

      // Loading state
      resBtn.disabled    = true;
      resBtn.textContent = currentLang === 'pt' ? 'A enviar...' : 'Sending...';

      try {
        const res  = await fetch('contact.php', {
          method: 'POST',
          body:   new FormData(resForm)
        });
        const data = await res.json();

        if (data.ok) {
          resBtn.innerHTML = `
            <svg style="width:16px;height:16px;flex-shrink:0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            ${T[currentLang]['res.ok']}`;
          resBtn.style.background    = 'transparent';
          resBtn.style.border        = '1px solid rgba(201,168,76,0.5)';
          resBtn.style.color         = '#C9A84C';
          resBtn.style.pointerEvents = 'none';
          resForm.reset();
        } else {
          resBtn.textContent      = T[currentLang]['res.err'];
          resBtn.style.background = '#1A1A1A';
          resBtn.style.color      = '#ff6b6b';
          resBtn.disabled         = false;
          setTimeout(() => {
            resBtn.textContent      = T[currentLang]['res.btn'];
            resBtn.style.background = '';
            resBtn.style.color      = '';
          }, 4000);
        }
      } catch {
        resBtn.textContent = T[currentLang]['res.err'];
        resBtn.style.color = '#ff6b6b';
        resBtn.disabled    = false;
        setTimeout(() => {
          resBtn.textContent = T[currentLang]['res.btn'];
          resBtn.style.color = '';
        }, 4000);
      }
    });
  }

});
