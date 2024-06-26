import { todayBtn } from "./script.js";

export let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    860: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  simulateTouch: null,
});

var swiper3 = new Swiper(".mySwiper3", {
  navigation: {
    nextEl: ".swiper--cat-next",
    prevEl: ".swiper--cat-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    860: {
      slidesPerView: 4,
      spaceBetween: 35,
    },
    1100: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1251: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 28,
    },
  },
});

todayBtn.addEventListener("click", () => {
  swiper2.simulateTouch = false;
});
