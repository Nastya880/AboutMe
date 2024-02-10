import {iosVhFix} from './utils/ios-vh-fix';
import {initSwiperEducation} from './modules/initSwiperEducation';
import { initBurgerMenu } from './modules/initBurgerMenu';
import {initDarkTheme} from './modules/initDarkTheme';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initSwiperEducation();
    initBurgerMenu();
    initDarkTheme();
  });
});
