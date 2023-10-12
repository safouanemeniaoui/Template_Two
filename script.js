let toogleMenu = document.querySelector(".toggle-menu");
let mobile = document.querySelector(".mobile");
let searchIcon = document.querySelector(".search-icon");
let searchField = document.querySelector(".search");
let myScroll = document.querySelector(".scroll");
let scrollUp = document.querySelector(".scroll-up");
let stat = document.querySelectorAll(".stat");
let section = document.querySelector(".statistics");
let skills = document.querySelectorAll(".skills-bar span");
let sectionSkill = document.querySelector(".skill");

toogleMenu.onclick = function () {
  mobile.classList.toggle("menu");
};

mobile.onclick = function (e) {
  for (let i = 0; i < mobile.children.length; i++) {
    mobile.children[i].children[0].classList.remove("active");
  }
  e.target.classList.add("active");
};

/* Start Search */

searchIcon.onclick = function () {
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

/* End Search */

function home() {
  for (let i = 0; i < mobile.children.length; i++) {
    mobile.children[i].children[0].classList.remove("active");
  }
  mobile.children[0].children[0].classList.add("active");
}

let started = false;
let special = document.querySelector(".special");

window.onscroll = function () {
  // --> Scroll to Top

  if (window.scrollY < document.documentElement.clientHeight / 2) {
    myScroll.classList.add("show");
  } else {
    myScroll.classList.remove("show");
  }

  // --> Active home link

  if (window.scrollY === 0) {
    setTimeout(home, 1000);
  }

  // --> Increase Numbers On Scrolling section Statistics

  if (window.scrollY >= section.offsetTop - 400) {
    if (!started) {
      stat.forEach((ele) => count(ele.children[1]));
    }
    started = true;
  }

  // --> Scroll Progress
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let result = Math.ceil((scrollY / height) * 100);
  special.style.backgroundImage = `linear-gradient(to right,var(--main-color) ${result}%,transparent ${result}%)`;

  //--> skills bar
  if (window.scrollY >= sectionSkill.offsetTop - 400) {
    skills.forEach((el) => (el.style.width = el.dataset.set));
  }
};

/* Start Increase Numbers On Scrolling */

function count(el) {
  let goal = el.dataset.set;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

/* End Increase Numbers On Scrolling */

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

let tab = ["url(images/im3.jpg)", "url(images/im4.jpg)", "url(images/im2.jpg)"];
let i = 1;
goLeft.onclick = function () {
  i <= 0 ? (i = 3) : i;
  landing.style.backgroundImage = tab[i - 1];
  for (let j = 0; j < dots.children.length; j++) {
    dots.children[j].classList.remove("active");
  }
  dots.children[i - 1].classList.add("active");
  i--;
};
goRight.onclick = function () {
  i >= 2 ? (i = -1) : i;
  landing.style.backgroundImage = tab[i + 1];
  for (let j = 0; j < dots.children.length; j++) {
    dots.children[j].classList.remove("active");
  }
  dots.children[i + 1].classList.add("active");
  i++;
};

/* End Slider */
