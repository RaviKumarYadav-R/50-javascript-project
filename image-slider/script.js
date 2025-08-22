const container = document.querySelector(".image-container");
const images = document.querySelectorAll("img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentIndex = 0;
next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
  console.log("ok");
});

prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
  console.log(currentIndex);
});
