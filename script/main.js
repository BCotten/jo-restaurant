console.log("js loading...");

const navButtonOpen = document.querySelector(".btn-open");
const navList = document.querySelector("#nav-list");
const smileyLogo = document.querySelector(".smiley-logo");
const imgOpen = document.querySelector(".img-open");
const imgClose = document.querySelector(".img-close");

const innerWidth = window.innerWidth;
showNav(innerWidth);

window.addEventListener("resize", function () {
  const innerWidth = window.innerWidth;
  showNav(innerWidth);
});

navButtonOpen.addEventListener("click", function () {
  // hide hamburger menu btn and show close menu btn
  if (imgOpen.hidden === true) {
    imgOpen.hidden = false;
  } else {
    imgOpen.hidden = true;
  }
  imgClose.hidden = !imgClose.hidden;
  // show navigation links
  let expanded = this.getAttribute("aria-expanded") === "true";
  this.setAttribute("aria-expanded", !expanded);
  let navList = this.nextElementSibling;
  navList.hidden = !navList.hidden;
});

function showNav(width) {
  if (width >= 1440) {
    navButtonOpen.hidden = true;
    smileyLogo.hidden = true;
    navList.hidden = false;
  } else {
    navButtonOpen.hidden = false;
    smileyLogo.hidden = false;
    navList.hidden = true;
  }
}
