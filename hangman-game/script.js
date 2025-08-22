window.addEventListener("DOMContentLoaded", () => {
  const keyboardBox = document.querySelector(".keyboard-keys");
  const letterList = document.querySelector(".letter-list");
  const hintEl = document.querySelector(".hint span");
  const imageEl = document.querySelector(".hangman-img");
  const resultPopup = document.querySelector(".result-popup");
  const resultImg = resultPopup.querySelector(".result-img");
  const resultEl = resultPopup.querySelector(".result");
  const newGameBtn = resultPopup.querySelector(".new-game");
  const container = document.querySelector(".container");

  let currentWord = null;
  let wrongGuess = 0;

  function getRandomWord() {
    const { word, hint } =
      wordList[Math.floor(Math.random() * wordList.length)];
    hintEl.innerText = hint;
    currentWord = word;
    letterList.innerHTML = word
      .split("")
      .map(() => "<li class='letter'></li>")
      .join("");
  }

  function showResult(result) {
    container.classList.add("hidden");
    resultPopup.classList.remove("hidden");
    if (result === "victory") {
      resultImg.src = `./images/victory.gif`;
      resultEl.innerText = "Congratulation! you won!";
    } else {
      resultImg.src = `./images/lost.gif`;
      resultEl.innerText = "Oops! you lost try again";
    }
  }

  function initGame(button, selectedLetter) {
    if (currentWord.includes(selectedLetter)) {
      currentWord.split("").forEach((letter, index) => {
        if (letter === selectedLetter) {
          const allList = letterList.querySelectorAll(".letter");
          allList[index].innerText = letter;
          button.classList.add("correct");
          button.disabled = true;
          if ([...allList].every((li) => li.innerText)) {
            showResult("victory");
          }
        }
      });
    } else {
      wrongGuess++;
      imageEl.src = `./images/hangman-${wrongGuess}.svg`;
      document.querySelector(
        ".wrong-guess span"
      ).innerHTML = `${wrongGuess} / 6`;
      button.classList.add("wrong");
      button.disabled = true;
      if (wrongGuess === 6) {
        showResult("lost");
      }
    }
  }

  for (let i = 97; i <= 122; i++) {
    const key = document.createElement("button");
    key.classList.add("key");
    key.innerText = String.fromCharCode(i);
    key.addEventListener("click", (e) =>
      initGame(e.target, String.fromCharCode(i))
    );
    keyboardBox.appendChild(key);
  }
  getRandomWord();

  newGameBtn.addEventListener("click", () => {
    location.reload();
  });
});
