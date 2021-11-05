// dice
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let dice6 = document.getElementById("dice6");

//page
let score = document.getElementById ("score");
let diceImage = document.getElementById ("diceImage");
let button = document.getElementById("button");


function rollDice (){
        let roll = Math.floor(Math.random() * 6) + 1;
        score.innerHTML = roll;     
}
button.addEventListener ("click", () => { 
        if (score === 1){
        $("#diceImage").attr(src=Images/dice1.svg);
    } else if (score === 2){
        $("diceImage").attr("src",`Images/dice2.svg`);
    } else if (score === 3){
        $("diceImage").attr("src", `Images/dice3.svg`);
    } else if (score === 4){
        $("diceImage").attr("src", `Images/dice4.svg`);
    } else if (score === 5){
        $("diceImages").attr("src",`Images/dice5.svg`);
    } else if (score == 6){
        $("diceImages").attr("src", `Images/dice6.svg`);
    }
})