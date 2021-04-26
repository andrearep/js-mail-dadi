//dichiarazione variabili
var saldo = 100;
var i = 0;
var dado = 0;
var playerDado = 0;
var tavoloDado = 0;
var play = true

var saldoAttuale = document.getElementById("saldo").innerHTML = saldo + " €"

while (saldo != 0 || play) {
    //facciamo inserire all'utente la sua puntata
    var puntata = prompt("quanto vuoi puntare? (ti ricordiamo che inizialmente ti abbiamo dato 100 euro");
    if (puntata > saldo) {
        console.log("in qusto casino non si fa credito");
    } else if (isNaN(puntata)) {
        console.log("Gli unici testi accettati per la puntata sono gli assegni, ma questo non sembra esserlo");
    } else if (puntata < 1) {
        console.log("ma almeno sai cos'è una scommessa?");
    } else {
        //togliamo la puntata dal saldo
        saldo -= puntata;
        var saldoAttuale = document.getElementById("saldo").innerHTML = saldo + " €"
        //tiriamo i dadi
        playerDado = Math.floor(Math.random() * 6) + 1;
        var saldoAttuale = document.getElementById("dado_player").innerHTML = playerDado;
        tavoloDado = Math.floor(Math.random() * 6) + 1;
        var saldoAttuale = document.getElementById("dado_tavolo").innerHTML = tavoloDado;

        if (playerDado > tavoloDado) {
            console.log("complimenti hai vinto, ti sono stati accreditati i danari");
            saldo += (puntata * 2);
            var saldoAttuale = document.getElementById("saldo").innerHTML = saldo + " €"

        } else if (playerDado < tavoloDado) {
            console.log("dispiace molto, puoi provare a puntare il doppio per rifarti");
        } else {
            console.log("oh no un pareggio, non c'è niente di peggio! comunque ci prendiamo 1 per la corrente e i server");
            saldo += puntata;
            saldo--;
            var saldoAttuale = document.getElementById("saldo").innerHTML = saldo + " €"
        }
    }
    if (saldo != 0) {
        var wannaPlay = prompt("vuoi giocare ancora?? s/n");
        if (wannaPlay == "s" || wannaPlay == "S") {

        } else if (wannaPlay == "n" || wannaPlay == "N") {
            play = false;
            var msg = document.getElementById(ty).innerHTML = "Grazie per aver giuocatr con noi!!";
        } else {
            var msg = document.getElementById(ty).innerHTML = "Non ho ben capito che hai detto ma lo prendo come un si";

        }
    } else {

        var msg = document.getElementById(ty).innerHTML = "Ti abbiamo prosciugato, torna a trovarci";
    }
}