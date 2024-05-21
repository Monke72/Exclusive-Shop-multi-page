const buttonLike = document.querySelectorAll(".any");
console.log(buttonLike);

buttonLike.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.target.closest(".any").classList.toggle("any--active");
  }); //Поднимаемся по элемнтам выше и ищем елемент к лассом any когда находим добаувлем класс any--active
});

const about = document.querySelector(".about");

function smoothScrollTo(element) {
  const target = document.querySelector(element);
  const positionY = target.offsetTop;
  window.scrollTo({ top: positionY, behavior: "smooth" });
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn__top")) {
    smoothScrollTo(".header"),
      setTimeout(() => {
        about.classList.add("red");
      }, 1500);

    setTimeout(() => {
      about.classList.remove("red");
    }, 6000);
  }
});
