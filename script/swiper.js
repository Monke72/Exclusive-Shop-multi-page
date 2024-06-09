import { todayBtn } from "./script.js";

export let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  simulateTouch: null,
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 6,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper--cat-next",
    prevEl: ".swiper--cat-prev",
  },
});
todayBtn.addEventListener("click", () => {
  swiper2.simulateTouch = false;
});
