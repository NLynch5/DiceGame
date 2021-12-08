//page
let roll = document.getElementById("roll");
let diceImage = document.getElementById("diceImage");
let button = document.getElementById("button");
let score = document.getElementById("score");
let total = 0;

//button function to create random number and change image
button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 6) + 1;
  score.innerHTML = num;
  if (num === 1) {
    total = 0;
    diceImage.src = "Images/dice1.svg";
  } else if (num === 2) {
    total += 2;
    diceImage.src = "Images/dice2.svg";
  } else if (num === 3) {
    total += 3;
    diceImage.src = "Images/dice3.svg";
  } else if (num === 4) {
    total += 4;
    diceImage.src = "Images/dice4.svg";
  } else if (num === 5) {
    total += 5;
    diceImage.src = "Images/dice5.svg";
  } else if (num === 6) {
    total += 6;
    diceImage.src = "Images/dice6.svg";
  } else if (total >= 25) {
    heading.innerHTML = "Winner";
  }
});
