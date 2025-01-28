let gebieden = [
    [0, 0, 0, 0]
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]; // Model/Masked Array

let player1 = {
    name: "player1", // Ombouwen naar userinput.
    turn: 0,
    soldiers: 24,
    areasOccupied: [0, 0, 0, 0],
}

let player2 = {
    name: "player2", // Ombouwen naar userinput.
    turn: 0,
    soldiers: 24,
    areasOccupied: [0, 0, 0, 0],
}

let player3 = {
    name: "player3", // Ombouwen naar userinput.
    turn: 0,
    soldiers: 24,
    areasOccupied: [0, 0, 0, 0],
}

function playerTurns() {
    let gameRound = 0

    // Bij elke case wordt gecheckt welke ronde elke persoon heeft. daarna plus 1
    switch (ronde) {
        case player1.turn:
            console.log("Player 1's Turn");
            player1.turn = player1.turn + 1;
            break;
        case player2.turn:
            console.log("Player 2's Turn");
            player2.turn = player2.turn + 1;
            break;
        case player3.turn:
            console.log("Player 3's Turn");
            player3.turn = player3.turn + 1;
            break;
    }
}
// OP ELK GEBIED KUNNEN MEER STATES GEZET WORDEN VOOR DE VEROVERING EN OOK BIJV AANTAL TROEPEN. DIT KAN OOK IN EEN ANDERE MASKED ARRAY.


function aangrenzendeGebiedenCheck() {
    for (let l = 0; l < gebieden.length; l++) {
        if (gebieden[l] === 0) {
            console.log(gebieden[l] + " is aangeklikt");
            document.getElementById("gebieden[l]).style.brightness = 0.5");
            gebieden[l] = 1;
            console.log(gebieden[l]);
        } else {
            console.log(gebieden[l] + " is uitgeklikt");
            gebieden[l] = 0;
            console.log(gebieden[l]);
            break
        }
    }
}