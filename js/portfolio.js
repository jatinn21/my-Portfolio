`use strict`;

("use strict");

function stars() {
  const numStar = 150;
  const stars = document.querySelector(".body");

  let i = 0;
  while (i < numStar) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight) * 1.5;
    const size = Math.random() * 7;
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
    star.style.backdropFilter = "blur(10px)";

    star.style.backgroundColor = "gainsboro";
    star.style.borderRadius = "50%";

    stars.appendChild(star);
    // star.style.zIndex = "1";

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
const parent = document.querySelector("#parent");
const aboutOverlay = document.querySelector(".overlay");
const parentInfo = document.getElementsByTagName("section");
const star = document.getElementsByTagName("i");

// parentInfo.style.filter = "blur(10px)";

const navbar = document.querySelector(".nav");

let numberOfTimesClickOnMenuButton = 0;
let abc = 0;
let starnumber = star.length;
menu.addEventListener("click", function () {
  // first time click : open the menu
  if (numberOfTimesClickOnMenuButton == 0) {
    line1.style.rotate = "-42deg";
    line2.style.rotate = "42deg";
    line1.style.transform = "translateY(.5rem)";
    line2.style.transform = "translateY(-.5rem)";
    line1.style.animationDuration = "0s";
    line2.style.animationDuration = "0s";

    // make the overlay visible
    aboutOverlay.style.display = "flex";
    aboutOverlay.style.flexDirection = "column";
    aboutOverlay.style.rowGap = "4rem";
    aboutOverlay.style.justifyContent = "center";
    aboutOverlay.style.alignItems = "center";

    //make the background blur
    parent.style.filter = "blur(6px)";
    // parent.style.transform = "scale(1.5)";
    parent.style.transition = "all .71s";

    //make the stars invisible
    for (let i = 0; i < 150; i++) {
      //   star[i].style.opacity = "0";
      star[i].classList.add("invisible");
      //   star[i].style.zIndex = "-1 !important";
    }

    // hide the menu text
    menuText.style.visibility = "hidden";

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

    //bring the scroller back for better view to read the content of about page
    document.body.style.overflow = "visible";

    //visible the stars
    for (let i = 0; i < 150; i++) {
      //   star[i].style.zIndex = "0 !important";
      star[i].style.transition = "all .5s 1s";
      //   star[i].style.display = "flex";
      star[i].classList.remove("invisible");
      //   star[i].style.opacity = "1";
    }
    // hide the overlay
    aboutOverlay.style.display = "none";
    // parent.style.transform = "scale(1)";
    // parent.style.transition = "all .71s";

    parent.style.filter = "blur(0px)";

    numberOfTimesClickOnMenuButton--;
  }
});

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

document.querySelector(".name").textContent = greet;

// generating a random number which will help us to take decision which social media link should be shown
let randomNumber = Math.trunc(Math.random() * 4 + 1);
console.log(randomNumber);

// now let make all social link invisible
const social_Links = document.querySelectorAll(".sociallink");
social_Links.forEach((i) => (i.style.display = "none"));

// now showing only the generated link
// document.querySelector(`.link${randomNumber}`).style.display = "flex";

// //apna college
// const randomImage = Math.trunc(Math.random() * 8);
// // console.log(`${randomImage}`);
// const side_button = document.querySelectorAll(".side_button");
// side_button.forEach((e) =>
//   e.addEventListener("onclick", () => {
//     document.querySelector(
//       ".project__image_container"
//     ).style.backgroundImage = `url(AC${randomImage}.png)`;
//   })
// );
