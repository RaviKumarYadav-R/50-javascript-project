const cards = document.querySelectorAll(".card");
const result = document.querySelector(".result");
const restartBtn = document.querySelector(".restart");

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function ChooseWinner() {
  for (const pattern of winningPattern) {
    const Value_1 = cards[pattern[0]].innerHTML;
    const Value_2 = cards[pattern[1]].innerHTML;
    const Value_3 = cards[pattern[2]].innerHTML;

    if (Value_1 !== "" && Value_2 !== "" && Value_3 !== "") {
      if (Value_1 === Value_2 && Value_2 === Value_3) {
        result.innerHTML = `${Value_1} is Winner`;
        cards.forEach((card) => (card.disabled = true));
        restartBtn.hidden = false;
        return;
      }
    }
  }

  const allFilled = [...cards].every((card) => card.innerHTML);
  if (allFilled) {
    result.innerHTML = "Match Draw";
    restartBtn.disabled = false;
  }
}

let Xturn = true;
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.innerHTML = Xturn ? "X" : "O";
    card.disabled = true;
    Xturn = !Xturn;
    ChooseWinner();
  });
});

restartBtn.addEventListener("click", () => {
  cards.forEach((card) => {
    card.disabled = false;
    card.innerHTML = "";
  });

  result.innerHTML = "";
  restartBtn.hidden = true;
});
