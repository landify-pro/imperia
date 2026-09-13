const bookingUrl = 'https://imperia-turcom.bookonline24.ru/';

const houses = {
  zum: {
    title: 'ЗУМ', image: 'assets/images/house-zum.webp', alt: 'Зеркальные умные модули ЗУМ',
    lead: 'Зеркальный умный модуль площадью 25 м² на первой береговой линии с прямым доступом к Катуни.',
    facts: ['Формат студии с кроватью King size', 'Диван, Smart TV и Wi-Fi', 'Холодильник, микроволновая печь, чайник и посуда', 'Открытая терраса с креслами, столиком и мангальной зоной']
  },
  zm: {
    title: 'ЗМ', image: 'assets/images/house-zm.webp', alt: 'Зеркальный модуль ЗМ на берегу Катуни',
    lead: 'Камерный зеркальный модуль площадью 25 м² для отдыха в окружении леса и реки.',
    facts: ['Первая береговая линия', 'Кровать King size и зона отдыха', 'Собственная ванная комната', 'Терраса с панорамным видом на Катунь']
  },
  barn: {
    title: 'БАРН', image: 'assets/images/house-barn.webp', alt: 'Коттедж Барнхаус',
    lead: 'Барнхаус площадью 28 м² с отдельной спальней, гостиной и дополнительным спальным местом на верхнем ярусе.',
    facts: ['Спальня и верхний жилой ярус', 'Гостиная с обеденной зоной', 'Собственная ванная комната', 'Терраса с видом на Катунь и мангальная зона']
  },
  sk: {
    title: 'СК', image: 'assets/images/house-sk.webp', alt: 'Семейный коттедж СК',
    lead: 'Семейный коттедж площадью 85 м² с двумя изолированными спальнями и просторной кухней-гостиной.',
    facts: ['Две изолированные спальни', 'Кухня-гостиная с обеденной зоной', 'Smart TV и Wi-Fi', 'Открытая терраса с видом на реку']
  },
  eco: {
    title: 'ЭКО', image: 'assets/images/house-eco.webp', alt: 'Двухэтажный кедровый коттедж ЭКО',
    lead: 'Двухэтажный коттедж из кедра площадью 200 м² для большой семьи или компании.',
    facts: ['Четыре спальни на втором этаже', 'Кухня-гостиная 60 м² с камином', 'Две ванные комнаты и стиральная машина', 'Терраса, мангальная и костровая зоны']
  }
};

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const bookingModal = document.querySelector('#booking-modal');
const houseModal = document.querySelector('#house-modal');
const atmosphereVideo = document.querySelector('#atmosphere-video');
const videoPlay = document.querySelector('.video-play');

const setHeader = () => header.classList.toggle('scrolled', scrollY > 24);
setHeader();
addEventListener('scroll', setHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Открыть меню' : 'Закрыть меню');
  mobileMenu.classList.toggle('open', !open);
});
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Открыть меню');
  mobileMenu.classList.remove('open');
}));

const openDialog = dialog => {
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open');
};
const closeDialog = dialog => {
  if (dialog.open) dialog.close();
  if (![bookingModal, houseModal].some(item => item.open)) document.body.classList.remove('modal-open');
};

const openBooking = () => {
  closeDialog(houseModal);
  const iframe = bookingModal.querySelector('iframe');
  if (!iframe.src) iframe.src = iframe.dataset.src;
  openDialog(bookingModal);
};
document.querySelectorAll('.js-booking-open').forEach(button => button.addEventListener('click', openBooking));
document.querySelector('#booking-form').addEventListener('submit', event => { event.preventDefault(); openBooking(); });

if (atmosphereVideo && videoPlay) {
  videoPlay.addEventListener('click', async () => {
    if (videoPlay.disabled) return;
    videoPlay.disabled = true;
    videoPlay.classList.add('loading');
    const label = videoPlay.querySelector('span:last-child');
    const initialLabel = label.textContent;
    label.textContent = 'Загружаем фильм';
    try {
      if (!atmosphereVideo.src) {
        const count = Number(atmosphereVideo.dataset.parts);
        const base = atmosphereVideo.dataset.partBase;
        const responses = await Promise.all(Array.from({ length: count }, (_, index) => fetch(`${base}${String(index).padStart(2, '0')}`)));
        if (responses.some(response => !response.ok)) throw new Error('Video loading failed');
        const chunks = await Promise.all(responses.map(response => response.arrayBuffer()));
        atmosphereVideo.src = URL.createObjectURL(new Blob(chunks, { type: 'video/mp4' }));
      }
      atmosphereVideo.controls = true;
      await atmosphereVideo.play();
      videoPlay.hidden = true;
    } catch {
      atmosphereVideo.controls = false;
      videoPlay.disabled = false;
      videoPlay.classList.remove('loading');
      label.textContent = initialLabel;
    }
  });
}

document.querySelectorAll('.house-card').forEach(card => {
  const show = () => {
    const data = houses[card.dataset.house];
    houseModal.querySelector('img').src = data.image;
    houseModal.querySelector('img').alt = data.alt;
    houseModal.querySelector('h2').textContent = data.title;
    houseModal.querySelector('.house-modal__lead').textContent = data.lead;
    houseModal.querySelector('ul').innerHTML = data.facts.map(item => `<li>${item}</li>`).join('');
    openDialog(houseModal);
  };
  card.addEventListener('click', show);
  card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); show(); } });
});

document.querySelectorAll('.modal__close').forEach(button => button.addEventListener('click', () => closeDialog(button.closest('dialog'))));
[bookingModal, houseModal].forEach(dialog => dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeDialog(dialog);
}));

const today = new Date();
const addDays = (date, days) => { const next = new Date(date); next.setDate(next.getDate() + days); return next.toISOString().slice(0, 10); };
const checkin = document.querySelector('input[name="checkin"]');
const checkout = document.querySelector('input[name="checkout"]');
checkin.min = addDays(today, 0); checkout.min = addDays(today, 1);
checkin.value = addDays(today, 7); checkout.value = addDays(today, 10);
checkin.addEventListener('change', () => { checkout.min = addDays(new Date(checkin.value), 1); if (checkout.value <= checkin.value) checkout.value = checkout.min; });

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .04 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

window.addEventListener('error', event => console.warn('Resource error:', event.target?.src || event.message), true);
