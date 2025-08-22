const buttons = document.querySelectorAll(".game-btn");
const result = document.querySelector(".result span");

function botChoice() {
  const weapon = ["rock", "paper", "scissors"];
  return weapon[Math.floor(Math.random() * 3)];
}

function showResult(player, bot) {
  let MatchResult;
  if (player === bot) {
    MatchResult = "Match Draw!";
  } else if (
    (player === "rock" && bot === "scissors") ||
    (player === "paper" && bot === "rock") ||
    (player === "scissors" && bot === "paper")
  ) {
    MatchResult = "Congratulation! You Win";
  } else {
    MatchResult = "Oops! You lose";
  }
  result.innerText = MatchResult;

  setTimeout(() => {
    result.innerText = "";
  }, 1000);
}


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.weapon;
    const BotChoice = botChoice();
    showResult(playerChoice, BotChoice);
  });
});
