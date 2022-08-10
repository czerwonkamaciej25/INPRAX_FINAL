import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  effect: "coverflow",
  autoplay: {
    delay: 5000,
  },
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
});
