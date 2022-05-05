import Swiper, {Navigation} from 'swiper';

const feedback = document.querySelector('.feedback');
const feedbackSwiper = feedback.querySelector('.swiper');
const feedbackSwiperButtonPrev = feedbackSwiper.querySelector('.feedback__swiper-button-prev');
const feedbackSwiperButtonNext = feedbackSwiper.querySelector('.feedback__swiper-button-next');

export const swiper = new Swiper(feedbackSwiper, {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 56,
  loop: true,
  navigation: {
    nextEl: feedbackSwiperButtonNext,
    prevEl: feedbackSwiperButtonPrev,
  },
});
