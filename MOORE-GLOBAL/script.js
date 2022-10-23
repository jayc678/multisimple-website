const hamburger = doocument.querySelector(".hamburger");
const navMenu = doocument.querySelector(".navMenu");
hamburger.addEventListener("click", mobieMenu);
function mobieMenu(){hamburger, classList, toggle("active");
navMenu, classList.toggle("active");
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu(){hamburger.classList.remove("active");
navMenu.classList.remove("active")
