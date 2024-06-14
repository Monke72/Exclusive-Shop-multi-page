const buttonLike = document.querySelectorAll(".any");
console.log(buttonLike);
const body = document.body;

buttonLike.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.target.closest(".any").classList.toggle("any--active");
  }); //Поднимаемся по элемнтам выше и ищем елемент к лассом any когда находим добаувлем класс any--active
});

async function getProducts(el) {
  const response = await fetch(el);
  const data = await response.json();
  return data;
}

const promiseAllSell = new Promise((resolve, reject) => {
  resolve(getProducts("../script/AllBest.json"));
});

promiseAllSell.then((data) => {
  data.forEach((el) => {
    const { img, discount, title, price } = el;
    const adjastHtmlSell = `
    <div class="card">
          <div class="card__top">
            <img class="card__image card__image-src" src="../image/today/images/${img}" alt="" />
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
                <img class = "show" src="../icon/today/show.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="card-btm">
            <div class="card-btm__name">${title}</div>
            <div class="card-btm__price">
              $260 <span class="old--price">${price}</span>
            </div>
            <div class="card-btm__rating">
              <ul class="card-btm__rating-list">
                <li class="card-btm__rating-item">
                  <img src="../icon/today/star.svg" alt="" />
                </li>
                <li class="card-btm__rating-item">
                  <img src="../icon/today/star.svg" alt="" />
                </li>
                <li class="card-btm__rating-item">
                  <img src="../icon/today/star.svg" alt="" />
                </li>
                <li class="card-btm__rating-item">
                  <img src="../icon/today/star.svg" alt="" />
                </li>
                <li class="card-btm__rating-item">
                  <img src="../icon/today/star.svg" alt="" />
                </li>
              </ul>
              <p class="card-btm__quantity">(65)</p>
            </div>
          </div>
        </div>
    `;

    document
      .querySelector(".best__products")
      .insertAdjacentHTML("beforeend", adjastHtmlSell);
  });
});
