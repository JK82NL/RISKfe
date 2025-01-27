//global variables
let player1 = 0;
let player2 = 0;
let player1Total = 0;
let player2Total = 0;
let dice1 = 0;
let dice2 = 0;
let playerTurn = 1;

// Info vastleggen.
// Game loop die begint op startpunt. p1 dobbelen.
// P1 roll
// P2 roll
// Als die bekend zijn winnaar calculeren.

// Maak pure functies en alleen voor de andere zaken de side effects (functions). Pure functies.
// Classes checken. kan zowel data modellen als functies opslaan.
// Class is eigenlijk een blauwdruk om een object van die class te maken.
// Denk hierbij aan een recept.

// invoerfunctie,
//     game functie,
//         roll functie.

function player1Army() {
    player1 = document.getElementById("attackerInput").value;
    document.getElementById("player1Army").innerHTML = player1;
    document.getElementById("attackerInput").style.display = "none";
    console.log(player1);
}
function player2Army() {
    player2 = document.getElementById("defenderInput").value;
    document.getElementById("player2Army").innerHTML = player2;
    document.getElementById("defenderInput").style.display = "none";
    console.log(player2);
}

function battleRetreat() {
    player1 = 0;
    player2 = 0;
    document.getElementById("player1Army").innerHTML = player1;
    document.getElementById("player2Army").innerHTML = player2;
    player1Total = 0;
    player2Total = 0;
    document.getElementById("player1Points1").innerHTML = player1Total;
    document.getElementById("player1Points2").innerHTML = player1Total;
    document.getElementById("player2Points1").innerHTML = player2Total;
    document.getElementById("player2Points2").innerHTML = player2Total;
    dice1 = 0;
    dice2 = 0;
    document.getElementById("dice1").innerHTML = dice1;
    document.getElementById("dice2").innerHTML = dice2;
    let playerTurn = 1;
    document.getElementById("winMessage").innerHTML = "Attacker has retreated from the battlefield!";
}

function diceRoll() {
    winnerCalculation()
    document.getElementById("winMessage").innerHTML = "";
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice1").innerHTML = dice1;
    document.getElementById("dice2").innerHTML = dice2;
    console.log(dice1, dice2);

    if (playerTurn == 1) {
        player1Total = dice1 + dice2;
        document.getElementById(`player${playerTurn}Points1`).innerHTML = dice1;
        document.getElementById(`player${playerTurn}Points2`).innerHTML = dice2;
        playerTurn = 2;
        console.log("Player 1 rolled:", player1Total);
    } else if (playerTurn == 2) {
        player2Total = dice1 + dice2;
        document.getElementById(`player${playerTurn}Points1`).innerHTML = dice1;
        document.getElementById(`player${playerTurn}Points2`).innerHTML = dice2;
        playerTurn = 3;
        console.log("Player 2 rolled:", player2Total);
    } else {
        manDown(player1Total, player2Total);
        playerTurn = 1;
        player1Total = 0;
        player2Total = 0;
    }
}

function manDown(player1Total, player2Total) {
    if (player1Total > player2Total) {
        player2--;
        document.getElementById("player2Army").innerHTML = player2;
        document.getElementById("winMessage").innerHTML = "Defender lost a soldier!";
    } else if (player2Total > player1Total) {
        player1--;
        document.getElementById("player1Army").innerHTML = player1;
        document.getElementById("winMessage").innerHTML = "Attacker lost a soldier!";
    } else if (player1Total == player2Total) {
        document.getElementById("winMessage").innerHTML = "Draw! Meaning the attacker loses";
    } else {
        document.getElementById("winMessage").innerHTML = "Error";
    }
}

function winnerCalculation() {
    if (player1 == 0) {
        document.getElementById("winMessage").innerHTML = "The defender wins the battle!";
    } else if (player2 == 0) {
        document.getElementById("winMessage").innerHTML = "The attacker wins the battle!";
    }
}

// if (playerTurn == 1) {
//     player1 = dice1 + dice2;
//     document.getElementById("player1Points").innerHTML = dice1;
//     document.getElementById("player1Points").innerHTML = dice2;
// } else if (playerTurn == 1) {
//     player2 = dice1 + dice2;
//     document.getElementById("player2Points").innerHTML = dice1;
//     document.getElementById("player2Points").innerHTML = dice2;
// }

// if (dice1 + dice2) {
//     player2--;
//     document.getElementById("player1Army").value = player2;
// } else if (dice2 > dice1) {
//     player1--;
//     document.getElementById("player2Army").value = player1;
