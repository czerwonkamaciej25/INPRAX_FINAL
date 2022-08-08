import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  effect: "coverflow",
  a11y: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  grabCursor: true,
  centeredSlides: true,

  coverflowEffect: {
    rotate: 0,
    stretch: 800,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});