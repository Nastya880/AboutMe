// import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
// import {Form} from './modules/form-validate/form';

// // ---------------------------------

// window.addEventListener('DOMContentLoaded', () => {

//   // Utils
//   // ---------------------------------

//   iosVhFix();

//   // Modules
//   // ---------------------------------

//   // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
//   // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//     const form = new Form();
//     window.form = form;
//     form.init();
//   });
// });

import {initSwiperEducation} from './modules/initSwiperEducation';

const headerNav = document.querySelector('[data-nav]');
const burgerBtn = document.querySelector('[data-nav-btn-open]');
const closeBtn = document.querySelector('[data-nav-btn-close]');
const menuLinks = document.querySelectorAll('[data-nav-link]');
const switchToggle = document.querySelector('.switch input[type="checkbox"]');
const body = document.body;

function openHeaderNav() {
  headerNav.classList.add('open');
  body.style.overflow = 'hidden';
}

function closeHeaderNav() {
  headerNav.classList.remove('open');
  body.style.overflow = '';
}

function isMobile() {
  return window.innerWidth < 992;
}

menuLinks.forEach((link) => link.addEventListener('click', () => {
  if (isMobile()) {
    closeHeaderNav();
  }
}));

function toggleDarkTheme() {
  const isDark = switchToggle.checked;
  body.classList.toggle('dark', isDark);
  localStorage.setItem('darkTheme', isDark ? 'on' : 'off');
}

switchToggle.addEventListener('change', toggleDarkTheme);

window.addEventListener('load', () => {
  const isDark = localStorage.getItem('darkTheme') === 'on';
  body.classList.toggle('dark', isDark);
  switchToggle.checked = isDark;
});

burgerBtn.addEventListener('click', openHeaderNav);
closeBtn.addEventListener('click', closeHeaderNav);

initSwiperEducation();
