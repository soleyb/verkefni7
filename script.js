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
  villa;
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
  console.log("Reiknaðu");
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
function ask(op, num1, num2, ans) {
  let theAnswer = Number(prompt("Hvað er " num1 op num2 "?" ));
  let correct = false;
  if (!Number.isNan(theAnswer) && theAnswer==ans){
    correct = true;
  }
}

/**
  *Fall sem velur aðgerð á bilinu 1-4
  1=+
  2=-
  3=*
  4=/
  og skilar tölum a og b ásamt svari
  */

function operation(opnum) {
  if (opnum==1){
    let op = "+";
    let num1 = randomNumber(1,100);
    let num2 = randomNumber(1,100);
    let ans = num1+num2;
  }
  else if (opnum==2){
    let op = "-";
    let num1 = randomNumber(1,100);
    let num2 = randomNumber(1,100);
    let ans = num1-num2;
  }
  else if (opnum==3){
    let op = "*";
    let num1 = randomNumber(1,10);
    let num2 = randomNumber(1,10);
    let ans = num1*num2;
  }
  else {
    let op = "/";
    let num1 = randomNumber(2,10);
    let num2 = num1*randomNumber(2,10);
    let ans = num1/num2;
  }
  return [num1, num2, op, ans];
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
