let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

// var image = document.getElementsByClassName("img1");
// image.src = "./images/image" + randomNumber1 + ".png";

document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
const headwin = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
  headwin.innerHTML = "Try Again";
} else if (randomNumber1 > randomNumber2) {
  headwin.innerHTML = "Player 1 has Win";
} else {
  headwin.innerHTML = "Player 2 has Win";
}
