const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start-btn");

let second = 60;

let timerstart = false;
let intervalId = null;

function displayTimer(remaining) {
  let min = String(Math.floor(remaining / 60));
  let sec = String(remaining % 60);
  timer.innerHTML = `${min.padStart(2, "0")} : ${sec.padStart(2, "0")}`;
}
startBtn.addEventListener("click", () => {
  if (timerstart) {
    startBtn.innerText = "Resume";
    clearInterval(intervalId);
    intervalId = null;
  } else {
    startBtn.innerText = "Pause";
    intervalId = setInterval(() => {
      if (second <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        second = 30;
        timerstart = false;
        startBtn.innerHTML = "Start Timer";
        timer.innerHTML = "00 : 30";
        return;
      }
      second--;
      displayTimer(second);
    }, 1000);
  }

  timerstart = !timerstart;
});

displayTimer(second);
