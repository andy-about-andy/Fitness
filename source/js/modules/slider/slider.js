import Swiper, {Navigation} from 'swiper';

const coaches = document.querySelector('.swiper-wrapper--nojs');
const reviews = document.querySelector('.swiper-wrapper--reviews-nojs');

coaches.classList.remove('swiper-wrapper--nojs');
reviews.classList.remove('swiper-wrapper--reviews-nojs');

window.addEventListener('load', () => {
  const slideDuplicate = document.querySelectorAll('.swiper-slide-duplicate');
  slideDuplicate.forEach((duplicate) => {
    duplicate.setAttribute('tabindex', -1);
  });
});

const swiperCoaches = new Swiper('.coaches__slider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 4,
  spaceBetween: 40,
  loop: true,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 2,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      initialSlide: 0,
    },
  },

  keyboard: true,
  grabCursor: true,
});

const swiperReviews = new Swiper('.reviews__slider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  keyboard: true,
  grabCursor: true,
});

export default (swiperCoaches, swiperReviews);
