import { todayBtn } from "./script.js";

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 6,
  spaceBetween: 28,
  navigation: {
    nextEl: ".swiper--cat-next",
    prevEl: ".swiper--cat-prev",
  },
});

export let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  simulateTouch: null,
});

todayBtn.addEventListener("click", () => {
  swiper2.simulateTouch = false;
});
