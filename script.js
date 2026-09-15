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
  },
  kb: {
    title: 'КБ', image: 'assets/images/room-kb.webp', alt: 'Благоустроенный номер категории КБ',
    lead: 'Благоустроенный номер площадью 16 м² в тёплом двухэтажном корпусе с общей кухней на этаже.',
    facts: ['До трёх гостей', 'Двуспальная или две односпальные кровати', 'Собственный санузел и душевая кабина', 'Общая оборудованная кухня на шесть номеров']
  },
  tk: {
    title: 'ТК', image: 'assets/images/room-tk.webp', alt: 'Обновлённый номер категории ТК',
    lead: 'Однокомнатный двухместный номер с обновлённым современным интерьером на второй или третьей береговой линии.',
    facts: ['Две трансформируемые односпальные кровати', 'Тёплый пол по всей площади номера', 'Мини-холодильник, чайник и фен', 'Собственная ванная комната']
  },
  bb: {
    title: 'ББ', image: 'assets/images/room-bb.webp', alt: 'Номер категории ББ на береговой линии',
    lead: 'Благоустроенный номер с отдельным входом на первой или второй береговой линии.',
    facts: ['Двуспальная кровать и дополнительный диван', 'Холодильник и чайник', 'Собственный санузел и душ', 'Терраса с мебелью и мангалом']
  },
  dp: {
    title: 'ДП', image: 'assets/images/room-dp.webp', alt: 'Двухэтажный номер Дуплекс',
    lead: 'Двухэтажный благоустроенный номер «Дуплекс» с панорамными окнами, верандой и балконом.',
    facts: ['До четырёх гостей', 'Гостиная и спальня на разных этажах', 'Холодильник, микроволновая печь и ТВ', 'Собственный санузел и мангальная зона']
  },
  b: {
    title: 'Б', image: 'assets/images/room-b.webp', alt: 'Благоустроенный номер категории Б',
    lead: 'Благоустроенный номер с отдельным входом в коттедже на два номера.',
    facts: ['До трёх гостей', 'Две односпальные кровати', 'Мягкий уголок и место для хранения', 'Собственный санузел и душ']
  },
  bplus: {
    title: 'Б+', image: 'assets/images/room-b_plus.webp', alt: 'Благоустроенный номер категории Б плюс',
    lead: 'Благоустроенный номер с отдельным входом на первом этаже коттеджа.',
    facts: ['До трёх гостей', 'Двуспальная или две односпальные кровати', 'Мягкий уголок и место для хранения', 'Собственный санузел и душ']
  },
  m: {
    title: 'М', image: 'assets/images/room-m.webp', alt: 'Мансардный номер категории М',
    lead: 'Камерный мансардный номер с отдельным входом на втором этаже коттеджа.',
    facts: ['Размещение для двух гостей', 'Двуспальная или две односпальные кровати', 'Стол, стулья и зеркало', 'Душевые и санузлы находятся на территории']
  },
  ld: {
    title: 'ЛД', image: 'assets/images/room-ld.webp', alt: 'Летний номер категории ЛД',
    lead: 'Летний номер с отдельным входом, беседкой и собственной костровой зоной рядом.',
    facts: ['Размещение для двух гостей', 'Двуспальная или две односпальные кровати', 'Витражное окно и место для хранения', 'Душевые и санузлы находятся на территории']
  },
  k: {
    title: 'К', image: 'assets/images/room-tr.webp', alt: 'Номера К1 и К2 в коттедже Треугольный',
    lead: 'Номера К1 и К2 в коттедже «Треугольный» с собственной гостиной и кухонной зоной.',
    facts: ['К1 — 38 м², две комнаты и гостиная', 'К2 — 25 м², комната и гостиная', 'Кухонная зона с холодильником', 'Собственный санузел и душ']
  }
};

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const houseModal = document.querySelector('#house-modal');
const atmosphereVideo = document.querySelector('#atmosphere-video');
const videoPlay = document.querySelector('.video-play');
const videoQuality = document.querySelector('#video-quality');

const hero = document.querySelector('.hero');
const footer = document.querySelector('.footer');
const updatePageChrome = () => {
  header.classList.toggle('scrolled', scrollY > 24);
  const pastHero = scrollY > Math.min(hero.offsetHeight * .72, 700);
  const beforeFooter = scrollY + innerHeight < footer.offsetTop + 40;
  document.body.classList.toggle('show-mobile-booking', pastHero && beforeFooter);
};
updatePageChrome();
addEventListener('scroll', updatePageChrome, { passive: true });
addEventListener('resize', updatePageChrome, { passive: true });

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
  if (!houseModal.open) document.body.classList.remove('modal-open');
};

if (atmosphereVideo && videoPlay) {
  videoPlay.addEventListener('click', async () => {
    try {
      await atmosphereVideo.play();
      atmosphereVideo.closest('.video-frame').classList.add('is-playing');
      videoPlay.hidden = true;
    } catch {
      videoPlay.querySelector('span:last-child').textContent = 'Нажмите ещё раз';
    }
  });
  atmosphereVideo.addEventListener('play', () => {
    atmosphereVideo.closest('.video-frame').classList.add('is-playing');
    videoPlay.hidden = true;
  });
}

if (atmosphereVideo && videoQuality) {
  videoQuality.addEventListener('change', () => {
    const nextSource = videoQuality.value === 'sd' ? atmosphereVideo.dataset.srcSd : atmosphereVideo.dataset.srcHd;
    const wasPaused = atmosphereVideo.paused;
    const currentTime = atmosphereVideo.currentTime;
    atmosphereVideo.src = nextSource;
    atmosphereVideo.load();
    atmosphereVideo.addEventListener('loadedmetadata', () => {
      atmosphereVideo.currentTime = Math.min(currentTime, atmosphereVideo.duration || currentTime);
      if (!wasPaused) atmosphereVideo.play().catch(() => {});
    }, { once: true });
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
[houseModal].forEach(dialog => dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeDialog(dialog);
}));

const today = new Date();
const formatLocalDate = date => [
  date.getFullYear(),
  String(date.getMonth() + 1).padStart(2, '0'),
  String(date.getDate()).padStart(2, '0')
].join('-');
const addDays = (date, days) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return formatLocalDate(next);
};
const parseLocalDate = value => {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
};
const checkin = document.querySelector('input[name="checkin"]');
const checkout = document.querySelector('input[name="checkout"]');
checkin.min = addDays(today, 0); checkout.min = addDays(today, 1);
checkin.value = addDays(today, 7); checkout.value = addDays(today, 10);
checkin.addEventListener('change', () => {
  if (!checkin.value) return;
  checkout.min = addDays(parseLocalDate(checkin.value), 1);
  if (checkout.value <= checkin.value) checkout.value = checkout.min;
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .04 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

window.addEventListener('error', event => console.warn('Resource error:', event.target?.src || event.message), true);
