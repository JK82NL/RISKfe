//global variables
let player1 = 0;
let player2 = 0;
let dice1 = 0;
let dice2 = 0;
let playerTurn = 1;


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

function diceRoll() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice1").innerHTML = dice1;
    document.getElementById("dice2").innerHTML = dice2;
    console.log(dice1, dice2);

    document.getElementById(`player${playerTurn}Points1`).innerHTML = dice1;
    document.getElementById(`player${playerTurn}Points2`).innerHTML = dice2;

    if (playerTurn == 1) {
        playerTurn = 2;
        let player1Total = dice1 + dice2;
    } else if (playerTurn == 2) {
        playerTurn = 1;
        let player2Total = dice1 + dice2;
        winnerCalculation();
        return player1Total, player2Total;
    }

    function winnerCalculation(player1Total, player2Total) {
        if (player1Total > player2Total) {
            player1--;
            document.getElementById("player1Army").value = player1;
        } else if (player2Total > player1Total) {
            player2--;
            document.getElementById("player2Army").value = player2;
        }
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
// }