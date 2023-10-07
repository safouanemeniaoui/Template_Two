let toogleMenu = document.querySelector(".toggle-menu");
let mobile = document.querySelector(".mobile");
let searchIcon = document.querySelector(".search-icon");
let searchField = document.querySelector(".search");
let myScroll = document.querySelector(".scroll");
let scrollUp = document.querySelector(".scroll-up");

toogleMenu.onclick = function () {
  mobile.classList.toggle("menu");
};

searchIcon.onclick = function () {
  console.log("clicked");
  searchField.classList.toggle("toggle");
  if (!searchField.classList.contains("toggle")) searchField.focus();
  if (searchField.value != "") {
    searchField.value = "";
  }
};

searchField.onfocus = function () {
  searchField.style.borderColor = "#19c8fa";
};

searchField.onblur = function () {
  searchField.style.borderColor = "white";
  if (searchField.value === "") {
    searchField.classList.toggle("toggle");
  }
};

window.onscroll = function () {
  if (window.scrollY < 500) {
    myScroll.classList.add("show");
  } else {
    myScroll.classList.remove("show");
  }
};

scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/* Start Slider */

let landing = document.querySelector(".landing");
let goLeft = document.querySelector(".go-left");
let goRight = document.querySelector(".go-right");
let dots = document.querySelector(".dots");
console.log(dots.children);

let tab = [
  "url(../images/im3.jpg)",
  "url(../images/im4.jpg)",
  "url(../images/im2.jpg)",
];
let i = 1;
goLeft.onclick = function () {
  console.log("left");
  i <= 0 ? (i = 3) : i;
  console.log(tab[i - 1]);
  landing.style.backgroundImage = tab[i - 1];
  for (let j = 0; j < dots.children.length; j++) {
    dots.children[j].classList.remove("active");
  }
  dots.children[i - 1].classList.add("active");
  i--;
};
goRight.onclick = function () {
  console.log("right");
  i >= 2 ? (i = -1) : i;
  console.log(tab[i + 1]);
  landing.style.backgroundImage = tab[i + 1];
  for (let j = 0; j < dots.children.length; j++) {
    dots.children[j].classList.remove("active");
  }
  dots.children[i + 1].classList.add("active");
  i++;
};

/* End Slider */
