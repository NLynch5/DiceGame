//page
//let roll = document.getElementById("roll");
let diceImage = document.getElementById("diceImage");
let button = document.getElementById("button");
let score = document.getElementById("score");
let total = 0;

//button function to create random number and change image
button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 6) + 1;
  score.innerHTML = num;
  if (num === 1) {
    rollResult += num;
    diceImage.src = "Images/dice1.svg";
    //total.innerHTML += num;
  } else if (num == 2) {
    diceImage.src = "Images/dice2.svg";
    //rollResult += 2;
    //total.innerHTML = num + rollResult;
  } else if (num == 3) {
    //rollResult.innerHTML += 3;
    //total.innerHTML = num + 3;
    diceImage.src = "Images/dice3.svg";
  } else if (num == 4) {
    //rollResult.innerHTML += 4;
    //total.innerHTML = num + 4;
    diceImage.src = "Images/dice4.svg";
  } else if (num == 5) {
    //rollResult.innerHTML += 5;
    //total.innerHTML = num + 5;
    diceImage.src = "Images/dice5.svg";
  } else if (num == 6) {
    //rollResult.innerHTML += 6;
    //total.innerHTML = num + 6;
    diceImage.src = "Images/dice6.svg";
    //} else if (total >= 25) {
  }
});
