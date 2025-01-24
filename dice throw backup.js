// Array voor dobbelsteen image & dobbelsteen punten (1 tm 6).
let diceFaces = ["&#9856;", "&#9857", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

let diceAtk1 = 0
let diceAtk2 = 0
let diceAtk3 = 0
let diceDef1 = 0
let diceDef2 = 0

function diceCount() {
    let diceAmount = 0;
    let diceAtk1 = document.getElementById("diceAtk1");
    let diceAtk2 = document.getElementById("diceAtk2");
    let diceAtk3 = document.getElementById("diceAtk3");
    let diceDef1 = document.getElementById("diceDef1");
    let diceDef2 = document.getElementById("diceDef2");

    // Checkt of en welke dobbelstenen zijn gekozen inclusief het aantal voor de worp(en).
    if (diceAtk1.checked == true && diceAtk2.checked == false && diceAtk3.checked == false) {
        diceAmount = 1;
        console.log(diceAmount);
        document.getElementById("diceThrowButton").innerHTML = `Werp ${diceAmount} dobbelstenen`;
    } else if(diceAtk1.checked == false && diceAtk2.checked == true && diceAtk3.checked == false) {
        diceAmount = 1;
        console.log(diceAmount);
        document.getElementById("diceThrowButton").innerHTML = `Werp ${diceAmount} dobbelstenen`;
    } else if(diceAtk1.checked == false && diceAtk2.checked == false && diceAtk3.checked == true) {
        diceAmount = 1;
        console.log(diceAmount);
        document.getElementById("diceThrowButton").innerHTML = `Werp ${diceAmount} dobbelstenen`;
        //
    } else if(diceAtk1.checked == true && diceAtk2.checked == true && diceAtk3.checked == false) {
        diceAmount = 2;
        console.log(diceAmount);
        document.getElementById("diceThrowButton").innerHTML = `Werp ${diceAmount} dobbelstenen`;
    } else if(diceAtk1.checked == true && diceAtk2.checked == false && diceAtk3.checked == true) {
        diceAmount = 2;
        console.log(diceAmount);
        document.getElementById("diceThrowButton").innerHTML = `Werp ${diceAmount} dobbelstenen`;
    } else if(diceAtk1.checked == false && diceAtk2.checked == true && diceAtk3.checked == true) {
        diceAmount = 2;
        console.log(diceAmount);
        document.getElementById("diceThrowButton").innerHTML = `Werp ${diceAmount} dobbelstenen`;
    } else if(diceAtk1.checked == true && diceAtk2.checked == true && diceAtk3.checked == true) {
        diceAmount = 3;
        console.log(diceAmount);
        document.getElementById("diceThrowButton").innerHTML = `Werp ${diceAmount} dobbelstenen`;
    } else {
        console.log(diceAmount = 0);
        diceAmount = 0;
        document.getElementById("diceThrowButton").innerHTML = `Kies de dobbelstenen`;
    }
    return diceAmount;
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
}
// Dobbelen: Random gekozen dice unicode char uit array | punten + 1 voor daadwerkelijke punten
function diceThrow(diceAmount) {
    let diceRoll = Math.floor(Math.random() * diceFaces.length);
    
    let points = diceRoll + 1;
    console.log("Aantal punten: " + points) 
    
    // if (diceRoll == 3) {
    //     console.log("3 dobbelstenen");
    //     document.getElementById("showThrow1").innerHTML = diceFaces[diceRoll] + " " + points;
    //     diceThrow()
    // } else if (diceRoll == 2) {
    //     console.log("2 dobbelstenen");
    //     document.getElementById("showThrow2").innerHTML = diceFaces[diceRoll] + " " + points;
    //     diceThrow()
    // } else if (diceRoll == 1) {
    //     console.log("1 dobbelsteen");
    //     document.getElementById("showThrow3").innerHTML = diceFaces[diceRoll] + " " + points;
    //     diceThrow()
    // } else {
    //     console.log("Volgende speler");
    // }
    
    // ERGENS NOG EEN TOGGLE MAKEN VOOR SPELER BEURT genaamd switchPlayerTurn()
    return points
}

function diceWin(points) {
    if (deiceCount == 0)
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
