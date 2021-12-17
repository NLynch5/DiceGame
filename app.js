//page
//let roll = document.getElementById("roll");
let diceImage = document.getElementById("diceImage");
let button = document.getElementById("button");
let score = document.getElementById("score");
let total = document.getElementById("total");
let playBtn = document.getElementById("playBtn");
let count = 0;

diceImage.src = "Images/dice.png";

//button function to create random number and change image
button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 6) + 1;
  //score.innerHTML = num;
  if (num === 1) {
    diceImage.src = "Images/dice1.svg";
    count += 1;
    score.textContent = `${count}`;
  } else if (num == 2) {
    diceImage.src = "Images/dice2.svg";
    count += 2;
    score.textContent = `${count}`;
  } else if (num == 3) {
    diceImage.src = "Images/dice3.svg";
    count += 3;
    score.textContent = `${count}`;
  } else if (num == 4) {
    diceImage.src = "Images/dice4.svg";
    count += 4;
    score.textContent = `${count}`;
  } else if (num == 5) {
    diceImage.src = "Images/dice5.svg";
    count += 5;
    score.textContent = `${count}`;
  } else if (num == 6) {
    diceImage.src = "Images/dice6.svg";
    count += 6;
    score.textContent = `${count}`;
  }
  if (count >= 25) {
    score.textContent = `You win`;
    diceImage.src = "Images/trophy.png";
  }
});

playBtn.addEventListener("click", () => {
  count = 0;
  diceImage.src = "Images/dice.png";
  score.textContent = `0`;
});
