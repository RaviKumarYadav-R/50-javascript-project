const tabBtn = document.querySelectorAll(".tab-btn");
const article = document.querySelectorAll(".article");

tabBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtn.forEach((el) => el.classList.remove("active"));
    btn.classList.add("active");
    const tabId = btn.dataset.tab;
    article.forEach((article) => {
      if (article.dataset.article === tabId) {
        article.classList.add("active");
      } else {
        article.classList.remove("active");
      }
    });
  });
});
