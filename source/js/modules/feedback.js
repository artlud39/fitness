import '../vendor';
const feedback = document.querySelector('.feedback');
const feedbackSwiper = feedback.querySelector('.swiper');
const feedbackSwiperButtonPrev = feedbackSwiper.querySelector('.feedback__swiper-button-prev');
const feedbackSwiperButtonNext = feedbackSwiper.querySelector('.feedback__swiper-button-next');


export const swiper = new Swiper(feedbackSwiper, {
  // slidesPerView: 4,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // centerInsufficientSlides: true,
  // loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: feedbackSwiperButtonNext,
    prevEl: feedbackSwiperButtonPrev,
  },
});


