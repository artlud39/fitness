import '../vendor';
export const swiper = new Swiper('.swiper', {
  // slidesPerView: 4,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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

// const swiper = document.querySelector('.swiper').swiper;
