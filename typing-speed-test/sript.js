import paragraphs from "./paragraphs.js";

const ParagraphEl = document.querySelector(".paragraph");
const input = document.querySelector("#input");
const timeEl = document.querySelector(".timer span");
const mistakeEl = document.querySelector(".mistakes span");
const tryAgain = document.querySelector(".try-again");

const time = 5;
let timeleft = time;
let index = 0;
let intervalId = null;
let mistakes = 0;
let typingStarted = false;
let para;

function addPara() {
  ParagraphEl.innerHTML = "";
  para = paragraphs[Math.floor(Math.random() * paragraphs.length)];
  para.split("").forEach((span) => {
    const spanEl = `<span>${span}</span>`;
    ParagraphEl.innerHTML += spanEl;
  });
}

function initTyping() {
  // check typing start or not
  if (!typingStarted) {
    intervalId = setInterval(startTimer, 1000);
    typingStarted = true;
  }
  if (index >= para.length) {
    clearInterval(intervalId);
    return;
  }
  const characters = ParagraphEl.querySelectorAll("span");
  const typedChar = input.value.split("")[index];
  if (typedChar === undefined) {
    index--;
    if (characters[index].classList.contains("incorrect")) {
      mistakes--;
      mistakeEl.innerText = mistakes;
    }
    characters[index].classList.remove("correct", "incorrect");
  } else {
    if (characters[index].innerText === typedChar) {
      characters[index].classList.add("correct");
    } else {
      characters[index].classList.add("incorrect");
      mistakes++;
      mistakeEl.innerText = mistakes;
    }
    index++;
  }
  characters.forEach((char) => char.classList.remove("active")); //remove active class from all characters
  // check if index is less than parapgaph length then add active class
  if (index < para.length) {
    characters[index].classList.add("active");
  }
}

function startTimer() {
  if (timeleft >= 0) {
    timeEl.innerText = timeleft;
    timeleft--;
  } else {
    clearInterval(intervalId);
    tryAgain.classList.remove("hidden");
  }
}

tryAgain.addEventListener("click", () => {
  addPara();
  timeleft = time;
  mistakes = 0;
  index = 0;
  typingStarted = false;
  mistakeEl.innerText = 0;
  timeEl.innerText = time;
  input.value = "";
  tryAgain.classList.add("hidden");
});
addPara();
document.addEventListener("keydown", () => input.focus());
ParagraphEl.addEventListener("click", () => input.focus());
input.addEventListener("input", initTyping);
