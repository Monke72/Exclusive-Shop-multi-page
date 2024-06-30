document.addEventListener("DOMContentLoaded", function () {
  // конечная дата
  const deadline = new Date(2024, 6, 11);
  // id таймера
  let timerId = null;
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? "0" + days : days;
    $hours.textContent = hours < 10 ? "0" + hours : hours;
    $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
    $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
    $days.dataset.title = "Days";
    $hours.dataset.title = "Hours";
    $minutes.dataset.title = "Minutes";
    $seconds.dataset.title = "Seconds";
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector(".timer__days");
  const $hours = document.querySelector(".timer__hours");
  const $minutes = document.querySelector(".timer__minutes");
  const $seconds = document.querySelector(".timer__seconds");
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

var deadline = "2024-07-12";
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function () {
    var t = getTimeRemaining(endtime);
    clock.innerHTML = ` 

    <ul class="timer--list">
  <li class="timer--item">
    <div class="time">${t.days} </div>
    <p>Days</p>
  </li>
  <li class="timer--item">
    <div class="time">${t.hours} </div>
    <p>Hours</p>
  </li>
  <li class="timer--item">
    <div class="time">${t.minutes} </div>
    <p>Minutes</p>
  </li>
  <li class="timer--item">
    <div class="time">${t.seconds}</div>
    <p>Seconds</p>
  </li>
</ul>`;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}

initializeClock("clockdiv", deadline);
