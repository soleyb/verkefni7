/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  play();
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  var count = 0;
  var timi = 0;
  var rett = 0;
  var naesta = true;
  alert("Markmiðið er að svara eins mörgum dæmum af 10 rétt eins hratt og mögulegt er.");
  while (count<GAMES_TO_PLAY){
    if (naesta){
      var t0=performance.now();
      let spurn = adgerd(randomNumber(1,4));
      svar = ask(spurn[0], spurn[1], spurn[2], spurn[3]);
      var t1=performance.now();
      count = count+1;
      timi=timi+(t1-t0);
      if (svar==true) {
        rett = rett+1;
      }
      else if (svar==null){
        naesta=false;
      }
    }
    else {
      alert("Hætt í leik.");
      break;
    }
  }
  if (count==10){
    timi = timi/1000;
    var medal = rett/timi;
    alert("Þú svaraðir " + rett + " af " + GAMES_TO_PLAY + " dæmum rétt á " + timi + " sekúndum. Meðalrétt svör á sekúndu eru " + medal + ".");
    naesta = confirm("Spila annan leik?");
    if (naesta){
      play();
    }
  }
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */


function ask(num1, num2, op, ans) {
  let theAnswer = Number(prompt("Hvað er " + num1 + op + num2 + "?" ));
  if (theAnswer==null||theAnswer==""){
    return null;
  }
  var correct = false;
  if (theAnswer==ans){
    correct = true;
  }
  return correct;
}


/**
  *Fall sem velur aðgerð á bilinu 1-4
  1=+
  2=-
  3=*
  4=/
  og skilar tölum a og b ásamt svari
  */

function adgerd(opnum) {
  if (opnum==1){
    var op = "+";
    var num1 = randomNumber(1,100);
    var num2 = randomNumber(1,100);
    var ans = num1+num2;
  }
  else if (opnum==2){
    var op = "-";
    var num1 = randomNumber(1,100);
    var num2 = randomNumber(1,100);
    var ans = num1-num2;
  }
  else if (opnum==3){
    var op = "*";
    var num1 = randomNumber(1,10);
    var num2 = randomNumber(1,10);
    var ans = num1*num2;
  }
  else {
    var op = "/";
    var num2 = randomNumber(2,10);
    var num1 = num2*randomNumber(2,10);
    var ans = num1/num2;
  }
  var fylki = new Array(num1,num2,op,ans);
  return fylki;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
