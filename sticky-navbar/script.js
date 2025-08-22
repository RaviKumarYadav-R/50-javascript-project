const navbarHeader = document.querySelector(".header");

const navTop = navbarHeader.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= navTop) {
    navbarHeader.classList.add("sticky");
  } else {
    navbarHeader.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyNav);
