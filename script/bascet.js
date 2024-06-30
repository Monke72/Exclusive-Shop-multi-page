const basketWrapper = document.querySelector(".wishlist__wrapper");
const cardLS = localStorage.getItem("card");
const deleteBtn = document.querySelector(".btn__clear");
const quantityBasket = document.querySelector(".quantity");
if (localStorage.getItem("card")) {
  basketWrapper.innerHTML = cardLS;
}

const cardAnyLS = JSON.parse(localStorage.getItem("basket"));
const like = document.querySelectorAll(".buttons__like");

function quantityCheck() {
  if (!cardAnyLS) {
    quantityBasket.textContent = 0;
  } else {
    quantityBasket.textContent = cardAnyLS.length;
  }
}
quantityCheck();

function deleteFromBasket() {
  localStorage.removeItem("card");
  localStorage.removeItem("basket");
  basketWrapper.innerHTML = "";
  deleteBtn.classList.add("none");
  quantityBasket.textContent = 0;
}

if (!cardAnyLS) {
  deleteBtn.classList.add("none");
}

deleteBtn.addEventListener("click", deleteFromBasket);

//Проблема в LS из-за того что карточки я получаю по тексту HTML и удалять их нужно тоже по тексту HTML что трудоемко и костыльно , поэтому я оставлю только кнопку полной очистки корзины

window.addEventListener(
  "storage",
  function (event) {
    if (event.key === "card") {
      basketWrapper.innerHTML = "";
      const cardArr = event.newValue;
      const allCards = [];
      allCards.push(cardArr);

      basketWrapper.innerHTML += allCards;
    }
  },
  false
);
