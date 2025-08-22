let hourEl = document.querySelector("#hour");
let minuteEl = document.querySelector("#minute");
let secondEl = document.querySelector("#second");
let dayEl = document.querySelector("#day");
let dateEl = document.querySelector("#date");

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let day = now.toLocaleDateString("en-IN", { weekday: "short" });
  let date = now.toLocaleDateString("en-IN", { dateStyle: "long" });

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  hourEl.innerHTML = hour;
  minuteEl.innerHTML = minute;
  secondEl.innerHTML = second;
  dayEl.innerHTML = day;
  date.innerHTML = date;
}

setInterval(updateClock, 1000);
