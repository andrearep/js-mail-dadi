var mailbox = ["pluto@disney.it", "topolino@disney.it", "minnie@disney.it", "pippo@disney.it", "paperino@disney.it", "paperina@disney.it",]

//chiediamo all'utente la sua mail
var mail = prompt("Prego inserire la sua mail: ")
console.log(mail);

//variabile di controllo
var controllo = false;


for (i = 0; i < mailbox.length && !controllo; i++) {
    if (mailbox[i] == mail) {
        var msg = document.getElementById("msg").innerHTML = "Accesso consentto :)"
        var msg = document.getElementById("msg").style.color = "green";
        controllo = true;
    }
}
if (!controllo) {
    var msg = document.getElementById("msg").innerHTML = "Accesso negato :("
    var msg = document.getElementById("msg").style.color = "red";

}