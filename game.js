// DICE GAME //

var numberplayer1 = prompt("inserisci un numero da 1 a 10");
parseInt(numberplayer1);
document.getElementById("player1").innerHTML = "player1"+numberplayer1;

var numbercom1 = Math.floor(Math.random()*10);
document.getElementById("com1").innerHTML="com1 "+numbercom1;

if (numberplayer1 > numbercom1) {
  document.getElementById("winner").innerHTML = "il vincitore è player1!!"
}
else {
  document.getElementById("winner").innerHTML = "il vincitore è com1, ritenta umano!";
}

//seconda possibilità//

//  if (numberplayer1 > numbercom1) {
//     alert("il vincitore è player 1");
//   }
//
//   else if (numberplayer1 < numbercom1) {
//     alert ("il vincitore è com1, RITENTA UMANO!!");
//   }
