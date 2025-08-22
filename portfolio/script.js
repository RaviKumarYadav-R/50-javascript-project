const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");
const navbarLinks = navbar.querySelectorAll("a");
const themeBtn = document.querySelector(".theme");
const html = document.documentElement;
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
});

navbarLinks.forEach((a) =>
  a.addEventListener("click", () => navbar.classList.remove("nav-open"))
);

themeBtn.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("data-theme", "dark");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("data-theme") === "dark") {
    html.setAttribute("data-theme", "dark");
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    html.setAttribute("data-theme", "light");
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});
