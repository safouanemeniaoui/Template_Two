let toogleMenu = document.querySelector(".toggle-menu");
let mobile = document.querySelector(".mobile");
let searchIcon = document.querySelector(".search-icon");
let searchField = document.querySelector(".search");
let myScroll = document.querySelector(".scroll");
let scrollUp = document.querySelector(".scroll-up");
let stat = document.querySelectorAll(".stat");

toogleMenu.onclick = function () {
  mobile.classList.toggle("menu");
};

mobile.onclick = function (e) {
  for (let i = 0; i < mobile.children.length; i++) {
    mobile.children[i].children[0].classList.remove("active");
  }
  e.target.classList.add("active");
};

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

function home() {
  for (let i = 0; i < mobile.children.length; i++) {
    mobile.children[i].children[0].classList.remove("active");
  }
  mobile.children[0].children[0].classList.add("active");
}

window.onscroll = function () {
  if (window.scrollY < 500) {
    myScroll.classList.add("show");
  } else {
    myScroll.classList.remove("show");
  }
  if (window.scrollY === 0) {
    setTimeout(home, 1000);
  }

  let coffee = stat[0].children[1].innerHTML;
  let projects = stat[1].children[1].innerHTML;
  let mail = stat[2].children[1].innerHTML;
  let awards = stat[3].children[1].innerHTML;

  if (window.scrollY > 5000) {
    function countUpCofee() {
      if (coffee < 1236) {
        ++coffee;
        stat[0].children[1].innerHTML = coffee;
      } else {
        clearInterval(counterC);
      }
    }
    function countUpProjects() {
      if (projects < 256) {
        ++projects;
        stat[1].children[1].innerHTML = projects;
      } else {
        clearInterval(counterP);
      }
    }
    function countUpMail() {
      if (mail < 1743) {
        ++mail;
        stat[2].children[1].innerHTML = mail;
      } else {
        clearInterval(counterM);
      }
    }
    function countUpAwards() {
      if (awards < 17) {
        ++awards;
        stat[3].children[1].innerHTML = awards;
      } else {
        clearInterval(counterA);
      }
    }
    let counterC = setInterval(countUpCofee, 2);
    let counterP = setInterval(countUpProjects, 10);
    let counterM = setInterval(countUpMail, 2);
    let counterA = setInterval(countUpAwards, 100);
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
