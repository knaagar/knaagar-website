const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var scrollable = document.getElementById("scroll-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollable.style.display = "block";
  } else {
    scrollable.style.display = "none";
  }
}

function scrollBtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// alert(window.innerWidth);
// https://replit.com/talk/learn/NodeJs-Express-tutorial/23519

AOS.init();