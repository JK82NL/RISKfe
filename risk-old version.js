// Array voor dobbelsteen image & dobbelsteen punten (1 tm 6).
let diceFaces = ["&#9856;", "&#9857", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

let diceAtk1 = 0
let diceAtk2 = 0
let diceAtk3 = 0
let diceDef1 = 0
let diceDef2 = 0

// Add these variables at the top
let isAttackerTurn = true; // To track whose turn it is
let throwResults = []; // To store dice results

function diceCount() {
    let diceAmount = 0;
    let diceAtk1 = document.getElementById("diceAtk1");
    let diceAtk2 = document.getElementById("diceAtk2");
    let diceAtk3 = document.getElementById("diceAtk3");
    let diceDef1 = document.getElementById("diceDef1");
    let diceDef2 = document.getElementById("diceDef2");

    // Separate counting for attacker and defender
    if (isAttackerTurn) {
        // Checkt of en welke dobbelstenen zijn gekozen inclusief het aantal voor de worp(en).
        if (diceAtk1.checked == true && diceAtk2.checked == false && diceAtk3.checked == false) {
            diceAmount = 1;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Aanvaller werp ${diceAmount} dobbelstenen`;
        } else if(diceAtk1.checked == false && diceAtk2.checked == true && diceAtk3.checked == false) {
            diceAmount = 1;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Aanvaller werp ${diceAmount} dobbelstenen`;
        } else if(diceAtk1.checked == false && diceAtk2.checked == false && diceAtk3.checked == true) {
            diceAmount = 1;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Aanvaller werp ${diceAmount} dobbelstenen`;
            //
        } else if(diceAtk1.checked == true && diceAtk2.checked == true && diceAtk3.checked == false) {
            diceAmount = 2;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Aanvaller werp ${diceAmount} dobbelstenen`;
        } else if(diceAtk1.checked == true && diceAtk2.checked == false && diceAtk3.checked == true) {
            diceAmount = 2;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Aanvaller werp ${diceAmount} dobbelstenen`;
        } else if(diceAtk1.checked == false && diceAtk2.checked == true && diceAtk3.checked == true) {
            diceAmount = 2;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Aanvaller werp ${diceAmount} dobbelstenen`;
        } else if(diceAtk1.checked == true && diceAtk2.checked == true && diceAtk3.checked == true) {
            diceAmount = 3;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Aanvaller werp ${diceAmount} dobbelstenen`;
        } else {
            console.log(diceAmount = 0);
            diceAmount = 0;
            document.getElementById("diceThrowButton").innerHTML = `Kies de dobbelstenen`;
        }
    } else {
        // Count defender dice
        if (diceDef1.checked == true && diceDef2.checked == false) {
            diceAmount = 1;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Verdediger werp ${diceAmount} dobbelstenen`;
        } else if (diceDef1.checked == false && diceDef2.checked == true) {
            diceAmount = 1;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Verdediger werp ${diceAmount} dobbelstenen`;
        } else if (diceDef1.checked == true && diceDef2.checked == true) {
            diceAmount = 2;
            console.log(diceAmount);
            document.getElementById("diceThrowButton").innerHTML = `Verdediger werp ${diceAmount} dobbelstenen`;
        } else {
            console.log(diceAmount = 0);
            diceAmount = 0;
            document.getElementById("diceThrowButton").innerHTML = `Kies de dobbelstenen`;
        }
    }

    // Update button text
    let buttonText = isAttackerTurn ? "Aanvaller" : "Verdediger";
    document.getElementById("diceThrowButton").innerHTML = 
        diceAmount > 0 ? `${buttonText} werp ${diceAmount} dobbelstenen` : "Kies de dobbelstenen";

    return diceAmount;
}

    // // POGING 4 Switch Case
    // switch(diceAmount) {
    //     case diceAtk1.checked == true && diceAtk2.checked == false && diceAtk3.checked == false:
    //         diceAmount = 1;
    //         document.getElementById("diceThrowButton").innerHTML = `"Werp ${diceAmount} dobbelsteen"`;
    //         break;
    //     case diceAtk1.checked == false && diceAtk2.checked == true && diceAtk3.checked == false:
    //         diceAmount = 1
    //         document.getElementById("diceThrowButton").innerHTML = `"Werp ${diceAmount} dobbelstenen"`;
    //         break;
    //     case diceAtk1.checked == false && diceAtk2.checked == false && diceAtk3.checked == true:
    //         diceAmount = 1
    //         document.getElementById("diceThrowButton").innerHTML = `"Werp ${diceAmount} dobbelstenen"`;
    //         break;
    //     case diceAtk1.checked == true && diceAtk2.checked == true && diceAtk3.checked == false:
    //         diceAmount = 2
    //         document.getElementById("diceThrowButton").innerHTML = `"Werp ${diceAmount} dobbelstenen"`;
    //         break;
    //     case diceAtk1.checked == true && diceAtk2.checked == false && diceAtk3.checked == true:
    //         diceAmount = 2
    //         document.getElementById("diceThrowButton").innerHTML = `"Werp ${diceAmount} dobbelstenen"`;
    //         break;
    //     case diceAtk1.checked == false && diceAtk2.checked == true && diceAtk3.checked == true:
    //         diceAmount = 2
    //         document.getElementById("diceThrowButton").innerHTML = `"Werp ${diceAmount} dobbelstenen"`;
    //         break;
    //     default:
    //         document.getElementById("diceThrowButton").innerHTML = `"Kies het aantal dobbelstenen"`;
    //         break;
    // }

    // // POGING 3 Masked Array gebruiken -3 dobbelstenen om de toggles van checked en unchecked te controleren. En button tonen om te gooien + aantal checked dobbelstenen.
    // let diceFaces = [0,0,0,0,0,0];    

// Dobbelen: Random gekozen dice unicode char uit array | punten + 1 voor daadwerkelijke punten


function diceThrow() {
    let diceAmount = diceCount();
    throwResults = [];
    
    // Clear previous results
    document.getElementById("showThrow1").innerHTML = "";
    document.getElementById("showThrow2").innerHTML = "";
    document.getElementById("showThrow3").innerHTML = "";

    // Throw dice based on selected amount
    for (let i = 0; i < diceAmount; i++) {
        let diceRoll = Math.floor(Math.random() * 6);
        throwResults.push(diceRoll + 1); // Store actual number (1-6)
        
        // Display dice face and result
        document.getElementById(`showThrow${i+1}`).innerHTML = 
            `${diceFaces[diceRoll]} (${diceRoll + 1})`;
    }

    // Sort results in descending order
    throwResults.sort((a, b) => b - a);

    // Switch turns
    if (isAttackerTurn) {
        // Disable attacker dice and enable defender dice
        document.getElementById("diceAtk1").disabled = true;
        document.getElementById("diceAtk2").disabled = true;
        document.getElementById("diceAtk3").disabled = true;
        document.getElementById("diceDef1").disabled = false;
        document.getElementById("diceDef2").disabled = false;
        isAttackerTurn = false;
    } else {
        // Calculate winner after defender throws
        calculateWinner();
        // Reset for next battle
        resetDice();
    }
}

function calculateWinner() {
    let attackerResults = throwResults; // From previous throw
    let defenderResults = throwResults; // From current throw
    
    // Compare results and determine winner
    // This is a basic implementation - you can enhance it based on Risk rules
    console.log("Attacker rolled: ", attackerResults);
    console.log("Defender rolled: ", defenderResults);
}

function resetDice() {
    // Reset all checkboxes and enable attacker dice
    document.getElementById("diceAtk1").checked = false;
    document.getElementById("diceAtk2").checked = false;
    document.getElementById("diceAtk3").checked = false;
    document.getElementById("diceDef1").checked = false;
    document.getElementById("diceDef2").checked = false;
    
    document.getElementById("diceAtk1").disabled = false;
    document.getElementById("diceAtk2").disabled = false;
    document.getElementById("diceAtk3").disabled = false;
    document.getElementById("diceDef1").disabled = true;
    document.getElementById("diceDef2").disabled = true;
    
    isAttackerTurn = true;
    document.getElementById("diceThrowButton").innerHTML = "Kies de dobbelstenen";
}

// Initialize the game state when the page loads
window.onload = function() {
    // Disable defender dice at start
    document.getElementById("diceDef1").disabled = true;
    document.getElementById("diceDef2").disabled = true;
}

function diceWin(points) {
    if (diceCount == 0)
        console.log("Dit is een filler");	
    }

// diceFace1 = "/u2680" // HTML entity = &#9856; or &#x2680;
// diceFace2 = "/u2681" // HTML entity = &#9857; or &#x2681;
// diceFace3 = "/u2682" // HTML entity = &#9858; or &#x2682;
// diceFace4 = "/u2683" // HTML entity = &#9859; or &#x2683;
// diceface5 = "/u2684" // HTML entity = &#9860; or &#x2684;
// diceFace6 = "/u2685" // HTML entity = &#9861; or &#x2685;

// // this variable should just flip from turn 1 to turn 2 and back.
// let mapOrBattle = 1;
// // Start at two because playMap will start with playerTurn = 1;
// let playerTurn = 2;

// // need to check which player turn it is, and which player started or ended their turn to see who is next for the areaSelection().
// function startGame() {
    
// function playMap() {
    
// }   

// function playBattle() {
    
// }
//     if (mapOrBattle == 1) {
//         playMap()
//     }
//     else if (mapOrBattle == 2) {
// }

// function diceSelection() {
//     let diceSelected = [0, 0, 0, 0, 0]
//     if (playerTurn == 1) {
//         diceSelected.length--2

//         playerTurn = 2
//     }
//     else if (playerTurn == 2) {
//         diceSelected.length--1

//         playerTurn = 1
//     }
//     else {
//         areaSelection()
//     }
