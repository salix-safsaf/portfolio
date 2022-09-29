'use strict';

///////////////////////////////////////
// Section: Selecting Elements.
///////////////////////////////////////

// Note: Modal.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Note: Cookie.
const header = document.querySelector('.header');

// Note: Intersection Observer API

const headerMain = document.querySelector('.header-main');
const navLogo = document.querySelector('.nav__logo');
const btnMobileNav = document.querySelector('.btn-mobile-nav');

// Note: Button scrolling.
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Note: Tabbed Component.
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Note: Menu fade.
const nav = document.querySelector('.nav');

// Note: Reveal Sections.
const allSections = document.querySelectorAll('.section');

// Note: Lazy loading images.
const imgTargets = document.querySelectorAll('img[data-src]');

///////////////////////////////////////
// Section: Modal window.
///////////////////////////////////////
// modal, overlay, btnCloseModal, btnsOpenModal ⬆⬆⬆

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Section: Cookie message.
///////////////////////////////////////
// header ⬆⬆⬆

// Creating element.
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Inserting element.
// header.append(message);

// Deleting element.
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// Styles.
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

///////////////////////////////////////////
// Section: Learn-more Button scrolling.
///////////////////////////////////////////
// btnScrollTo, section1 ⬆⬆⬆

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////
// Section: Event Delegation: Page Navigation.
/////////////////////////////////////////////////

// 1. Add event Listener to common parent element.
// 2. Determine what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Note: Matching Strategy.
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Section: Tabbed Component.
///////////////////////////////////////
// tabs, tabsContainer, tabsContent ⬆⬆⬆

// Event Delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Note: Guard clause.
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // active tab
  clicked.classList.add('operations__tab--active');

  // active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
// Section: Menu-Fade animation.
///////////////////////////////////////
// nav ⬆⬆⬆

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelectorAll('img');

    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////
// Section: Sticky Navigation.
///////////////////////////////////////
// Intersection Observer API
// header ⬆⬆⬆ headerMain, navLogo, btnMobileNav

const navHeight = nav.getBoundingClientRect().height;

// 1- ObsCallback function
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navLogo.classList.add('sticky');
    nav.classList.add('sticky');
    btnMobileNav.classList.add('sticky');
    header.classList.add('sticky');
  } else {
    navLogo.classList.remove('sticky');
    nav.classList.remove('sticky');
    btnMobileNav.classList.remove('sticky');
    header.classList.remove('sticky');
  }
};

// 2- ObsOptions
const hedObsOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: `-${navHeight}px`,
};

// 3- Observer
const headerObserver = new IntersectionObserver(stickyNav, hedObsOptions);

// 4- Observations
headerObserver.observe(headerMain);

///////////////////////////////////////
// Section: Reveal Sections.
///////////////////////////////////////
// Intersection Observer API
// allSections ⬆⬆⬆

// 1- ObsCallback function
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

// 2- ObsOptions
const secObsOptions = {
  root: null,
  threshold: 0.15,
};

// 3- Observer
const sectionObserver = new IntersectionObserver(revealSection, secObsOptions);

// 4- Observations
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

///////////////////////////////////////
// Section: Lazy loading images.
///////////////////////////////////////
// Intersection Observer API
// imgTargets ⬆⬆⬆

// 1- ObsCallback function
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // replace src with data src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

// 2- ObsOptions
const imgObsOptions = {
  root: null,
  threshold: 0,
  rootMargin: '200px',
};

// 3- Observer
const imgObserver = new IntersectionObserver(loadImg, imgObsOptions);

// 4- Observations
imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Section: Slider.
///////////////////////////////////////

const slider = function () {
  // Selecting Elements
  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // create Dots
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // activateDot
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // slide position
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // previous slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // initiation function
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // buttons - Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Arrow keys
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  // Dots Container
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

///////////////////////////////////////
// FIX: Make Mobile NAv. work.
///////////////////////////////////////

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////
// FIX: Set current year.
///////////////////////////////////////

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////
// FIX: Smooth scrolling animation.
///////////////////////////////////////

const allLinks = document.querySelectorAll('.nav__link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('mobile-link'))
      headerEl.classList.toggle('nav-open');
  });
});
