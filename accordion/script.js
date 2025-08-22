const faqQuestions = document.querySelectorAll(".group");

faqQuestions.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
});
