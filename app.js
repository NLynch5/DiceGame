//page
let score = document.getElementById ("score");
let diceImage = document.getElementById ("diceImage");
let button = document.getElementById("button");

//game
let score = 0
let count = 0
let win = 0


button.addEventListener ("click", () => {
    let num = Math.ceil(Math.random()*6)
        if (num === 1){
        $("#diceImage").attr("src",`Images/dice1.svg`);
    } else if (num === 2){
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