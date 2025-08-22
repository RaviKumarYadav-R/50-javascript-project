const audio = document.querySelector("audio");
const progress = document.getElementById("progress");
const playBtn = document.querySelector("#play-pause");

let isPlay = false;
let intervalId = null;

playBtn.addEventListener("click", () => {
  if (isPlay) {
    audio.pause();
    clearInterval(intervalId);
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  } else {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    intervalId = setInterval(() => {
      progress.value = audio.currentTime;
    }, 300);
  }

  isPlay = !isPlay;
});

audio.addEventListener("loadedmetadata", () => {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
});

progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

audio.addEventListener("ended", () => {
  clearInterval(intervalId);
  isPlay = false;
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  progress.value = 0;
});
