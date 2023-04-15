"use strict";

function stars() {
  const numStar = 100;
  const stars = document.querySelector("#stars");

  let i = 0;
  while (i < numStar) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const size = Math.random() * 9;
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.height = size + "px";
    star.style.width = size + "px";
    star.style.boxShadow = "0px 0px " + (size - 8.5) + "px white";
    const duration = Math.random() * 10;
    star.style.animationDuration = 2 + duration + "s";
    star.style.transition = "all ." + 10 + duration + "s";
    stars.appendChild(star);
    // star.style.zIndex = "5";
    i++;
  }
}
stars();

//animation when user hover on menu button
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".line");
const line2 = document.querySelector(".line2");
const line1 = document.querySelector(".line1");
const menuText = document.querySelector(".menuTxt");
const topMenuElements = document.querySelectorAll(".top");
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

    //increase the size of our avatar
    document.querySelector(".avatar").style.transform =
      "scale(2) TranslateX(10%)";
    // document.querySelector(".avatar").style.transform = "TranslateX(20%)";
    document.querySelector(".avatar").style.rotate = "15deg";

    numberOfTimesClickOnMenuButton++;
  } else {
    // second time click : close the menu
    line1.style.rotate = "0deg";
    line2.style.rotate = "0deg";
    line1.style.transform = "translateY(0rem)";
    line2.style.transform = "translateY(0rem)";
    line1.style.animationDuration = "0.61s";
    line2.style.animationDuration = "0.61s";
    // body.style.transform = "scale(1)";

    // show the menu text
    menuText.style.visibility = "visible";

    // hiding overlay from the picture from display block to none
    overlay.style.display = "none";

    //redeuse the size of our avatar
    document.querySelector(".avatar").style.transform =
      "scale(1) TranslateX(0%)";
    document.querySelector(".avatar").style.rotate = "0deg";

    numberOfTimesClickOnMenuButton--;
  }
});

menu.addEventListener("mouseover", function () {
  topMenuElements.forEach(
    (e) => (e.style.animationName = "bounce"),
    (e.style.animationDuration = "0.81s")
    // (e.style.animationState = "running")
  );
  //   menuText.style.animationName = "bounce";
  //   menuText.style.animationDuration = "0.81s";
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
