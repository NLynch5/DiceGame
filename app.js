// dice
// let dice1 = document.getElementById("dice1");
// let dice2 = document.getElementById("dice2");
// let dice3 = document.getElementById("dice3");
// let dice4 = document.getElementById("dice4");
// let dice5 = document.getElementById("dice5");
// let dice6 = document.getElementById("dice6");

//page
let roll = document.getElementById ("roll");
let diceImage = document.getElementById ("diceImage");
let button = document.getElementById("button");


 //function rollDice (){
   //    let roll = Math.floor(Math.random() * 6) + 1;
     //   score.innerHTML = roll;  

//button.addEventListener ("click", function () {   
//})
//}

button.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 6) + 1;
    roll.innerHTML = num;  
   if (num === 1) {
        diceImage.src = "Images/dice1.svg";
    } else if (num === 2){
        diceImage.src = "Images/dice2.svg";
    } else if (num === 3){
        diceImage.src = "Images/dice3.svg";
    } else if (num === 4){
        diceImage.src = "Images/dice4.svg";
    } else if (num === 5){
        diceImage.src = "Images/dice5.svg";
    } else if (num === 6){
        diceImage.src = "Images/dice6.svg";
    }
})

