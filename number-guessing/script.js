const guessInput = document.getElementById("guessInput");
const submitGuessButton = document.getElementById("submitGuess");
const messageDisplay = document.getElementById("message");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

submitGuessButton.addEventListener("click", () => {
  let guessedNumber = parseInt(guessInput.value);
  attempts++;
  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
    messageDisplay.textContent =
      "Please enter a valid number between 1 and 100.";
  } else if (guessedNumber < randomNumber) {
    messageDisplay.textContent = "Too low! Try again.";
  } else if (guessedNumber > randomNumber) {
    messageDisplay.textContent = "Too high! Try again.";
  } else {
    messageDisplay.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
  }
});
