import Swiper from '../vendor/swiper';

const initSwiperEducation = () => {
  const swiper = new Swiper('[data-swiper="education"]', {
    loop: true,

    navigation: {
      nextEl: '[data-swiper-education-button="next"]',
      prevEl: '[data-swiper-education-button="prev"]',
    },

    breakpoints: {
      1366: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 32,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  return swiper;
};

export {initSwiperEducation};
