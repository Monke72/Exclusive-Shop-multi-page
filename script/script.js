const buttonLike = document.querySelectorAll(".any");
console.log(buttonLike);

buttonLike.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.target.closest(".any").classList.toggle("any--active");
  }); //Поднимаемся по элемнтам выше и ищем елемент к лассом any когда находим добаувлем класс any--active
});
