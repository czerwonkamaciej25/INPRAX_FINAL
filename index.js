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
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 100
    },
    // when window width is >= 820px
    820: {
      slidesPerView: 3,
      spaceBetween: 100
    }
    
  },
});
