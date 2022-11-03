// Scroll To Top
let scrollUp = document.querySelector(".scroll-up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};

// Loop On Gallery

// Switcher
let buttonsOfTaps = document.querySelectorAll(".switcher li");
let imgsOfTaps = document.querySelectorAll(".gallery img");
let links = document.querySelectorAll(".pro .links a");

links.forEach((a) => {
  a.target = "_blank";
});

buttonsOfTaps.forEach((li) => {
  li.addEventListener("click", manageActiveClass);
  li.addEventListener("click", manageImgsFilter);
});

// Func Manage Active Class
function manageActiveClass() {
  buttonsOfTaps.forEach((li) => {
    li.classList.remove("active");
  });
  this.classList.add("active");
}

// Func Manage Imgs Filter
function manageImgsFilter() {
  imgsOfTaps.forEach((img) => {
    img.parentElement.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((img) => {
    img.parentElement.style.display = "block";
    img.parentElement.style.cursor = "pointer";
  });
}
