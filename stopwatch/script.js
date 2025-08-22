const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let timeSec = 0;
let isRunning = false;
let intervalId = null;

function formateTime(time) {
  let min = String(Math.floor(timeSec / 60)).padStart(2, "0");
  let sec = String(timeSec % 60).padStart(2, "0");

  return `${min}:${sec}`;
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;

    intervalId = setInterval(() => {
      timeSec++;
      timer.innerHTML = formateTime(timeSec);
    }, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  isRunning = false;
  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  timeSec = 0;
  clearInterval(intervalId);
  intervalId = null;
  isRunning = false;
  timer.innerHTML = "00:00";
});
