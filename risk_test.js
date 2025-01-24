//global variables
let p1 = 0;
let p2 = 0;
let dice1 = 0;
let dice2 = 0;
let turns = 0;

function p1Army() {
    p1 = document.getElementById("attackerInput").value;
    document.getElementById("p1Army").innerHTML = p1;
    console.log(p1);
}
function p2Army() {
    p2 = document.getElementById("defenderInput").value;
    document.getElementById("p2Army").innerHTML = p2;
    console.log(p2);
}

function diceRoll() {
    if (turns == 0) {

    }
    console.log(p1, p2);

    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    console.log(dice1, dice2);

    document.getElementById("p2Points").innerHTML = dice1;
    document.getElementById("p2Points").innerHTML = dice2;

    if (turns == 0) {
        p1 = dice1 + dice2;
        document.getElementById("p1Points").innerHTML = dice1;
        document.getElementById("p1Points").innerHTML = dice2;
    } else if (turns == 1) {
        p2 = dice1 + dice2;
        document.getElementById("p2Points").innerHTML = dice1;
        document.getElementById("p2Points").innerHTML = dice2;

    }

    if (dice1 + dice2) {
        p2--;
        document.getElementById("p1Army").value = p2;
    } else if (dice2 > dice1) {
        p1--;
        document.getElementById("p2Army").value = p1;
    }
}