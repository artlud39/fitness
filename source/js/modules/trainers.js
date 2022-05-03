import '../vendor';
const trainars = document.querySelector('.trainers');
const trainersSwiper = trainars.querySelector('.swiper');
const trainarsSwiperButtonPrev = trainersSwiper.querySelector('.swiper-button-prev');
const trainarsSwiperButtonNext = trainersSwiper.querySelector('.swiper-button-next');


export const swiper = new Swiper(trainersSwiper, {
  slidesPerView: 4,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
  navigation: {
    nextEl: trainarsSwiperButtonNext,
    prevEl: trainarsSwiperButtonPrev,
  },
  // keyboad: {
  //   enable: true,
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

