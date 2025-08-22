const stars = document.querySelectorAll(".star");
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const starVal = star.dataset.value;
    stars.forEach((star, idx) => {
      if (idx < starVal) {
        star.style.color = "gold";
      } else {
        star.style.color = "gray";
      }
    });
  });
});
