//chiedere all'utente di inserire l'indirizzo mail

var insert_email= prompt("inserisci l'indirizzo email");

//creare una lista di email

var mail_list= ["pelosi.teo@gmail.com", "mario.rossi@outlook.it",
"andrea.bianchi@libero.it","lorenzo.medici@yahoo.it"]

//controllare se l'email inserita dall'utente è presente o meno nella nostra lista

for (var i = 0; i < mail_list.length; i++) {
  var one_mail = mail_list[i];

  if (insert_email==one_mail) {
    var email_trovata=0; //definire una variabile come risultato del ciclo
  }

}
var email_trovata;

//creare una condizione tale per cui a seconda del valore inserito ci sia un univoca
//possibilità di soluzione. (se l'email inserita è presente tra quelle della lista allora
//il messaggio indicherà "login effettuato" altrimenti "login errato")

if (email_trovata===0) {
  alert("login effettuato");
}

else{
  alert ("login errato");
}
