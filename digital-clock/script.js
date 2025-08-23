const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function initTime() {
  const now = new Date();
  hour.innerText = now.getHours().toString().padStart(2, "0");
  minute.innerText = now.getMinutes().toString().padStart(2, "0");
  second.innerText = now.getSeconds().toString().padStart(2, "0");
  day.innerText = dayName[now.getDay()];
}

setInterval(initTime, 1000)
