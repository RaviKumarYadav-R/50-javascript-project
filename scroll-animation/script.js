const section = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (enteries) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  }
);

section.forEach((el) => observer.observe(el));
