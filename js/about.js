"use strict";

function stars() {
  const numStar = 330;
  const stars = document.querySelector(".aboutParent");

  let i = 0;
  while (i < numStar) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight) * 1.5;
    const size = Math.random() * 10;
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.height = size + "px";
    star.style.width = size + "px";
    star.style.boxShadow = "0px 0px " + (size - 8.5) + "px white";
    const duration = Math.random() * 10;
    star.style.animationDuration = 2 + duration + "s";
    star.style.transition = "all ." + 8 + duration + "s";
    //just trying
    star.style.position = "absolute";
    star.style.backgroundColor = "gainsboro";
    star.style.borderRadius = "50%";

    stars.appendChild(star);
    // star.style.zIndex = "1";

    i++;
  }
}
stars();

// function starsIn Nav(){

// }

//animation when user hover on menu button
const menu = document.querySelector(".menu");
const lines = document.querySelectorAll(".line");
const line2 = document.querySelector(".line2");
const line1 = document.querySelector(".line1");
const menuText = document.querySelector(".menuTxt");
const aboutOverlay = document.querySelector(".overlay");
const parentInfo = document.querySelector(".aboutParent");
const navbar = document.querySelector(".nav");

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

    //bring the overlay appeared
    aboutOverlay.style.display = "flex";
    aboutOverlay.style.flexDirection = "column";
    aboutOverlay.style.rowGap = "4rem";
    aboutOverlay.style.justifyContent = "center";
    aboutOverlay.style.alignItems = "center";

    //remove the scroller for better view for APC
    document.body.style.overflow = "hidden !important";

    //increasing the scale of parentInfo Container and making it blur

    parentInfo.style.transition = "all .5s ease";
    parentInfo.style.filter = "blur(3px)";

    // navbar color black
    navbar.style.backgroundImage = "none";
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.548) !important";

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

    //bring the overlay disappear on second click
    aboutOverlay.style.display = "none";

    //bring the scroller back for better view to read the content of about page
    document.body.style.overflow = "visible";

    //increasing the scale of parentInfo Container and making it blur
    parentInfo.style.filter = "blur(0px)";

    // navbar color background image
    navbar.style.backgroundImage =
      "radial-gradient(1800px 1100px at center,#0e143d,#000000fc,#111010e2)";
    navbar.style.backgroundColor = "none";

    numberOfTimesClickOnMenuButton--;
  }
});

// generating a random number which will help us to take decision which social media link should be shown
let randomNumber = Math.trunc(Math.random() * 4 + 1);
console.log(randomNumber);

// now let make all social link invisible
const social_Links = document.querySelectorAll(".sociallink");
social_Links.forEach((i) => (i.style.display = "none"));

// now showing only the generated link
document.querySelector(`.link${randomNumber}`).style.display = "flex";

// Greeting section
let greet;
let time = new Date().getHours();
if (time >= 0 && time < 12) {
  greet = "Hey, Good Morning";
} else if (time >= 12 && time < 18) {
  greet = "Hey, Good Afternoon";
} else {
  greet = "Hey, Good Evening.";
}

document.querySelector(".greeting").textContent = greet;
