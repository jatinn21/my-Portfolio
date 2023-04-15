"use strict";

function stars() {
  const numStar = 150;
  const stars = document.querySelector(".stars");

  let i = 0;
  while (i < numStar) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight * 1.2);
    const size = Math.floor(Math.random() * 9);
    const duration = Math.random() * 10;

    star.style.backgroundColor = "grey";
    star.style.top = y + "px";
    star.style.left = x + "px";
    star.style.height = size + "px";
    star.style.width = size + "px";
    star.style.boxShadow = "0px 0px " + (size - 8.5) + "px white";
    star.style.animationDuration = 2 + duration + "s";
    star.style.transition = "all ." + 8 + duration + "s";
    stars.appendChild(star);
    i++;
  }
}

stars();

//greeting
const hour = new Date().getHours();
let greet;
if (hour >= 0 && hour < 12) {
  greet = "Hello there!";
} else if (hour >= 12 && hour < 17) {
  greet = "Have a splendid afternoon!";
} else {
  greet = "Have a nice evening : )";
}
console.log(hour);
document.querySelector(".greeting").innerHTML = greet;

//animation when user hover on menu button
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".line");
const line2 = document.querySelector(".line2");
const line1 = document.querySelector(".line1");
const menuText = document.querySelector(".menuTxt");
// const topMenuElements = document.querySelectorAll(".top");
const overlay = document.querySelector(".overlay");

const APC = document.querySelectorAll(".overlay__link");

let numberOfTimesClickOnMenuButton = 0;

menu.addEventListener("click", function () {
  // first time click : open the menu
  if (numberOfTimesClickOnMenuButton == 0) {
    line1.style.rotate = "-42deg";
    line2.style.rotate = "42deg";
    line1.style.transform = "translateY(.5rem)";
    line2.style.transform = "translateY(-.5rem)";
    line1.style.animationDuration = "0s";
    line2.style.animationDuration = "0s";

    // hide the menu text
    menuText.style.visibility = "hidden";

    // bringing overlay into the picture from display none to block
    overlay.style.display = "flex";
    overlay.style.zIndex = "6";
    overlay.style.backdropFilter = "blur(10rem)";
    overlay.style.backgroundColor = "black";
    APC.forEach((e) => (e.style.color = "white"));

    numberOfTimesClickOnMenuButton++;
  } else {
    // second time click : close the menu
    line1.style.rotate = "0deg";
    line2.style.rotate = "0deg";
    line1.style.transform = "translateY(0rem)";
    line2.style.transform = "translateY(0rem)";
    line1.style.animationDuration = "0.61s";
    line2.style.animationDuration = "0.61s";

    // show the menu text
    menuText.style.visibility = "visible";

    // hiding overlay from the picture from display block to none
    overlay.style.display = "none";

    numberOfTimesClickOnMenuButton--;
  }
});

menu.addEventListener("mouseover", function () {
  topMenuElements.forEach(
    (e) => (e.style.animationName = "bounce"),
    (e.style.animationDuration = "0.81s")
  );
  console.log("red");
});

// generating a random number which will help us to take decision which social media link should be shown
let randomNumber = Math.trunc(Math.random() * 4 + 1);
console.log(randomNumber);

// now let make all social link invisible
const social_Links = document.querySelectorAll(".sociallink");
social_Links.forEach((i) => (i.style.display = "none"));

// now showing only the generated link
document.querySelector(`.link${randomNumber}`).style.display = "flex";

//dots animation
const dots = document.querySelector(".dots");
// let i = 0;
// while (i < 3) {
//   dots.textContent = `. `.repeat(i + 1);
//   i++;
// }
