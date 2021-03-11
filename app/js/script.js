const bookmarkingTab = document.querySelector(".bookmarking-tab");
const searchingTab = document.querySelector(".searching-tab");
const sharingTab = document.querySelector(".sharing-tab");

const bookmarkingSection = document.querySelector(".bookmarking");
const searchingSection = document.querySelector(".searching");
const sharingSection = document.querySelector(".sharing");

var tabValue = 0;


function showTab(show, hide1, hide2) {
  show.classList.remove("hide");
  hide1.classList.add("hide");
  hide2.classList.add("hide");
}

function tabStyles(show, hide1, hide2) {
  if (window.matchMedia("(min-width: 900px)").matches) {
    show.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
    show.firstElementChild.style.fontWeight = 500;
    hide1.style.borderBottom = "1px solid rgb(0,0,0,0.2)";
    hide1.firstElementChild.style.fontWeight = 400;
    hide2.style.borderBottom = "1px solid rgba(0,0,0,0.2)";
    hide2.firstElementChild.style.fontWeight = 400;
  } else {
    show.firstElementChild.style.borderBottom = "4px solid hsl(0, 94%, 66%)";
    show.firstElementChild.style.fontWeight = 500;
    hide1.firstElementChild.style.borderBottom = "none";
    hide1.firstElementChild.style.fontWeight = 400;
    hide2.firstElementChild.style.borderBottom = "none";
    hide2.firstElementChild.style.fontWeight = 400;
  }
}

function selectTab() {
  if (tabValue == 0) {
    tabStyles(bookmarkingTab, searchingTab, sharingTab);
    showTab(bookmarkingSection, searchingSection, sharingSection);
  } else if (tabValue == 1) {
    tabStyles(searchingTab, bookmarkingTab, sharingTab);
    showTab(searchingSection, bookmarkingSection, sharingSection);
  } else if (tabValue == 2) {
    tabStyles(sharingTab, bookmarkingTab, searchingTab);
    showTab(sharingSection, bookmarkingSection, searchingSection);
  }
}

bookmarkingTab.addEventListener("click", function () {
  tabValue = 0;
  selectTab();
});
searchingTab.addEventListener("click", function () {
  tabValue = 1;
  selectTab();
});
sharingTab.addEventListener("click", function () {
  tabValue = 2;
  selectTab();
});

const faqQuestions = document.querySelectorAll(".question-wrapper");

faqQuestions.forEach((question) => {
  var toggleValue = 0;
  question.addEventListener("click", function () {
    if (toggleValue == 0) {
      toggleValue = 1;
      question.nextElementSibling.classList.remove("hide");
      question.lastElementChild.setAttribute(
        "src",
        "/images/icon-arrow-red.svg"
      );
      question.lastElementChild.style.transform = "rotate(180deg)";
    } else if (toggleValue == 1) {
      toggleValue = 0;
      question.nextElementSibling.classList.add("hide");
      question.lastElementChild.setAttribute(
        "src",
        "/images/icon-arrow-blue.svg"
      );
      question.lastElementChild.style.transform = "rotate(0deg)";
    }
  });
});

const input = document.querySelector("input");
const contactBtn = document.querySelector(".contact-btn");
const form = document.querySelector("form");
const errorTxt = document.querySelector(".error-text");
const errorIcon = document.querySelector(".error-icon");
const inputWrapper = document.querySelector(".input-wrapper");

let emailRegex = /^[A-Za-z0-9]+@[A-Za-z]+[.]([A-Za-z]+$|[A-Za-z]+[.][A-Za-z]+$)/;

function checkEmail() {
  if (emailRegex.test(input.value)) {
    form.submit();
    errorTxt.classList.add("hide");
    errorIcon.classList.add("hide");
    inputWrapper.style.background = "none";
  } else {
    errorTxt.classList.remove("hide");
    errorIcon.classList.remove("hide");
    inputWrapper.style.background = "hsl(0, 94%, 66%)";
  }
}

contactBtn.addEventListener("click", checkEmail);

const nav = document.querySelector("nav");
const mobileMenu = document.querySelector(".mobile-menu");
const navLogo = document.querySelector(".nav-logo");
const menuBtn = document.querySelector(".menu-btn");

var menuToggleValue = 0;

function menuToggle() {
  if (menuToggleValue == 0) {
    menuToggleValue = 1;
    nav.style.background = "transparent";
    mobileMenu.classList.remove("hide");
    navLogo.setAttribute("src", "/images/logo-bookmark-white.svg");
    menuBtn.setAttribute("src", "/images/icon-close.svg");
  } else if (menuToggleValue == 1) {
    menuToggleValue = 0;
    nav.style.background = "white";
    mobileMenu.classList.add("hide");
    navLogo.setAttribute("src", "/images/logo-bookmark.svg");
    menuBtn.setAttribute("src", "/images/icon-hamburger.svg");
  }
}

menuBtn.addEventListener("click", menuToggle);
