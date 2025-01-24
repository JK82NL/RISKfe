let gebieden = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
// -1 +1 -4 +4