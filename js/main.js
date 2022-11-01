// Scroll To Top
let scrollUp = document.querySelector(".scroll-up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};
