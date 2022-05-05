import Swiper, {Navigation} from 'swiper';

const trainars = document.querySelector('.trainers');
const trainersSwiper = trainars.querySelector('.swiper');
const trainarsSwiperButtonPrev = trainersSwiper.querySelector('.swiper-button-prev');
const trainarsSwiperButtonNext = trainersSwiper.querySelector('.swiper-button-next');


export const swiper = new Swiper(trainersSwiper, {
  modules: [Navigation],
  centeredSlidesBounds: true,
  navigation: {
    nextEl: trainarsSwiperButtonNext,
    prevEl: trainarsSwiperButtonPrev,
  },

  keyboad: {
    enable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});
