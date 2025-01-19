console.log("js loading...");

// show/hide navigation selectors
const navButtonOpen = document.querySelector(".btn-open");
const navList = document.querySelector("#nav-list");
const smileyLogo = document.querySelector(".smiley-logo-list");
const imgOpen = document.querySelector(".img-open");
const imgClose = document.querySelector(".img-close");

// show/hide reviews selectors
const set_1 = document.querySelectorAll(".set-1");
const set_2 = document.querySelectorAll(".set-2");
const reviewBtn = document.querySelector("#review-btn");

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

let reviewCount = 0;

reviewBtn.addEventListener("click", function () {
  console.log("clicked");

  if (reviewCount === 0) {
    reviewCount = reviewCount + 1;
    set_1.forEach((item) => {
      item.style.display = "block";
      item.classList = " review-card fade-in";
    });
  } else if (reviewCount === 1) {
    reviewCount = reviewCount + 1;
    set_2.forEach((item) => {
      item.style.display = "block";
      item.classList = "review-card fade-in";
    });
  } else {
    reviewCount = 0;
    set_1.forEach((item) => {
      item.style.display = "none";
    });
    set_2.forEach((item) => {
      item.style.display = "none";
    });
  }
});
