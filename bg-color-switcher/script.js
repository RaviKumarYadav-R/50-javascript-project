const colorCard = document.querySelectorAll(".color");
colorCard.forEach((card, i) => {
  card.addEventListener("click", () => {
    document.body.classList = ""; // revmove previous class before add new class
    document.body.classList.add(`color-${i + 1}`);
  });
});
