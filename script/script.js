const buttonLike = document.querySelectorAll(".any");
console.log(buttonLike);
const body = document.body;

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

export const todayBtn = document.querySelector(".today__view");

function vievAll() {
  todayBtn.classList.add("none");
  document.querySelector(".today__swiper-buttons").classList.add("none");
  document.querySelector(".today__wrapper").classList.remove("swiper-wrapper");
  document.querySelector(".today__wrapper").classList.add("today__wrapper-st");
  document.querySelector(".swiper").classList.remove("mySwiper2");
}

todayBtn.addEventListener("click", vievAll);

async function getProducts(el) {
  const response = await fetch(el);
  const data = await response.json();
  return data;
}

const promiseToday = new Promise((resolve, reject) => {
  resolve(getProducts("products.json"));
});

promiseToday.then((data) => {
  data.forEach((el) => {
    const { img, discount, title, price } = el;
    console.log(discount);
    const adjastHtml = `
    <div class="card swiper-slide ">
              <div class="card__top">
                <img 
                  class="card__image anyToday" 
                  src="./image/today/images/${img}"
                  alt=""
                  width="172px"
                  height="160px"
                />
                <div class="card__sale">-${discount}%</div>
                <div class="card-buttons">
                  <button class="buttons__like card__btn">
                    <svg
                      class="any"
                      width="17.000000"
                      height="15.000000"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        id="Vector"
                        d="M0 3.88C0 5.61 0.7 9.73 7.59 13.88C7.71 13.96 7.85 14 8 14C8.14 14 8.28 13.96 8.4 13.88C15.3 9.73 16 5.61 16 3.88C16 1.73 14.2 0 12 0C9.79 0 8 2.35 8 2.35C8 2.35 6.2 0 4 0C1.79 0 0 1.73 0 3.88Z"
                        stroke="#000000"
                        stroke-opacity="1.000000"
                        stroke-width="1.500000"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button class="buttons__show card__btn">
                    <img src="./icon/today/show.svg" alt="" />
                  </button>
                </div>
              </div>
              <div class="card-btm">
                <div class="card-btm__name">${title}</div>
                <div class="card-btm__price">
                  $ ${
                    price - (price / 100) * discount
                  } <span class="old--price"> $ ${price}</span>
                </div>
              </div>
            </div>
    `;
    document
      .querySelector(".today__wrapper")
      .insertAdjacentHTML("beforeend", adjastHtml);
  });
});

// elInHtml();

const delBtn = document.querySelector(".btm__info-btn");
const makeOrder = document.querySelector(".buy__now");

function delEl() {
  document.querySelectorAll(".btm__info").forEach((el) => {
    el.classList.add("none");
    document.querySelector(".product__info").classList.add("none");
    document.querySelector(".buy__inputs-btn").classList.add("not--active");
  });
}

delBtn.addEventListener("click", delEl);

makeOrder.addEventListener("click", () => {
  makeOrder.textContent = "Its function now not ready";
  makeOrder.classList.add("not--active");
});

//Phone mask
mask("[data-tel-input]");

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});

const musBtn = document.querySelectorAll(".music__info-btn");
musBtn.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".window__wrapper").classList.toggle("none");
    body.classList.toggle("overflow");
  });
});

window.addEventListener("click", function (event) {
  if (event.target === document.querySelector(".window__wrapper")) {
    document.querySelector(".window__wrapper").classList.add("none");
    body.classList.remove("overflow");
  }
});

let cardArray = [];

function addToBasket(el) {
  const card = el.target.closest(".card").innerHTML;
  cardArray.push(card);
  return cardArray, console.log(cardArray.join());
}

buttonLike.forEach((el) => {
  el.addEventListener("click", addToBasket);
});

export { cardArray, vievAll };
