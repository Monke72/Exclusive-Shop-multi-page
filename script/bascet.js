const basketWrapper = document.querySelector(".wishlist__wrapper");
if (localStorage.getItem("card")) {
  basketWrapper.innerHTML = localStorage.getItem("card");
}
window.addEventListener(
  "storage",
  function (event) {
    if (event.key === "card") {
      basketWrapper.innerHTML = "";
      const cardArr = event.newValue;
      console.log(event.newValue);

      basketWrapper.innerHTML += cardArr.join("");
    }
  },
  false
);
