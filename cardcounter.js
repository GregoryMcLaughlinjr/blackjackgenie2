/*--------------VARIABLES---------------*/

let runningCount = 0;
let cardsDealt = 0;
let decksRemaining = 8;
let cardsRemaining = 416;
let highCardsRemaining = 160;
let lowCardsRemaining = 160;
let middleCardsRemaining = 96;
let twoOfSpadesRemaining = 8;
let twoOfDiamondsRemaining = 8;
let twoOfClubsRemaining = 8;
let twoOfHeartsRemaining = 8;
let threeOfSpadesRemaining = 8;
let threeOfDiamondsRemaining = 8;
let threeOfClubsRemaining = 8;
let threeOfHeartsRemaining = 8;
let fourOfSpadesRemaining = 8;
let fourOfDiamondsRemaining = 8;
let fourOfClubsRemaining = 8;
let fourOfHeartsRemaining = 8;
let fiveOfSpadesRemaining = 8;
let fiveOfDiamondsRemaining = 8;
let fiveOfClubsRemaining = 8;
let fiveOfHeartsRemaining = 8;
let sixOfSpadesRemaining = 8;
let sixOfDiamondsRemaining = 8;
let sixOfClubsRemaining = 8;
let sixOfHeartsRemaining = 8;
let sevenOfSpadesRemaining = 8;
let sevenOfDiamondsRemaining = 8;
let sevenOfClubsRemaining = 8;
let sevenOfHeartsRemaining = 8;
let eightOfSpadesRemaining = 8;
let eightOfDiamondsRemaining = 8;
let eightOfClubsRemaining = 8;
let eightOfHeartsRemaining = 8;
let nineOfSpadesRemaining = 8;
let nineOfDiamondsRemaining = 8;
let nineOfClubsRemaining = 8;
let nineOfHeartsRemaining = 8;
let tenOfSpadesRemaining = 8;
let tenOfDiamondsRemaining = 8;
let tenOfClubsRemaining = 8;
let tenOfHeartsRemaining = 8;
let jackOfSpadesRemaining = 8;
let jackOfDiamondsRemaining = 8;
let jackOfClubsRemaining = 8;
let jackOfHeartsRemaining = 8;
let queenOfSpadesRemaining = 8;
let queenOfDiamondsRemaining = 8;
let queenOfClubsRemaining = 8;
let queenOfHeartsRemaining = 8;
let kingOfSpadesRemaining = 8;
let kingOfDiamondsRemaining = 8;
let kingOfClubsRemaining = 8;
let kingOfHeartsRemaining = 8;
let aceOfSpadesRemaining = 8;
let aceOfDiamondsRemaining = 8;
let aceOfClubsRemaining = 8;
let aceOfHeartsRemaining = 8;


/*--------------FUNCTIONS--------------*/

function lowCard() {
  runningCount++;
  cardsDealt++;
  document.getElementById('runningCount').innerHTML = runningCount;
  document.getElementById('cardsDealt').innerHTML = cardsDealt;

  trueCountCalculation();
  cardsRemainingCalculation();
  lowCardsRemainingCalculation();
  lowCardPercentageCalculation();
  middleCardPercentageCalculation();
  highCardPercentageCalculation();
  decksRemainingCalculation();
  cardsRemainingFunction();

  statusHTML();
  statusStyle();

  twosRemainingPercentage();
  threesRemainingPercentage();
  foursRemainingPercentage();
  fivesRemainingPercentage();
  sixesRemainingPercentage();
  sevensRemainingPercentage();
  eightsRemainingPercentage();
  ninesRemainingPercentage();
  tensRemainingPercentage();
  jacksRemainingPercentage();
  queensRemainingPercentage();
  kingsRemainingPercentage();
  acesRemainingPercentage();
}



function middleCard() {
  runningCount + 0;
  cardsDealt++;
  document.getElementById('runningCount').innerHTML = runningCount;
  document.getElementById('cardsDealt').innerHTML = cardsDealt;

  trueCountCalculation();
  cardsRemainingCalculation();
  middleCardsRemainingCalculation();
  lowCardPercentageCalculation();
  middleCardPercentageCalculation();
  highCardPercentageCalculation();
  decksRemainingCalculation();
  cardsRemainingFunction();

  statusHTML();
  statusStyle();

  twosRemainingPercentage();
  threesRemainingPercentage();
  foursRemainingPercentage();
  fivesRemainingPercentage();
  sixesRemainingPercentage();
  sevensRemainingPercentage();
  eightsRemainingPercentage();
  ninesRemainingPercentage();
  tensRemainingPercentage();
  jacksRemainingPercentage();
  queensRemainingPercentage();
  kingsRemainingPercentage();
  acesRemainingPercentage();
}



function highCard() {
  runningCount--;
  cardsDealt++;
  document.getElementById('runningCount').innerHTML = runningCount;
  document.getElementById('cardsDealt').innerHTML = cardsDealt;

  trueCountCalculation();
  cardsRemainingCalculation();
  highCardsRemainingCalculation();
  lowCardPercentageCalculation();
  middleCardPercentageCalculation();
  highCardPercentageCalculation();
  decksRemainingCalculation();
  cardsRemainingFunction();

  statusHTML();
  statusStyle();

  twosRemainingPercentage();
  threesRemainingPercentage();
  foursRemainingPercentage();
  fivesRemainingPercentage();
  sixesRemainingPercentage();
  sevensRemainingPercentage();
  eightsRemainingPercentage();
  ninesRemainingPercentage();
  tensRemainingPercentage();
  jacksRemainingPercentage();
  queensRemainingPercentage();
  kingsRemainingPercentage();
  acesRemainingPercentage();
}


function newShoe() {
  cardsDealt = 0;
  runningCount = 0;
  cardsRemaining = 416;
  highCardsRemaining = 160;
  lowCardsRemaining = 160;
  middleCardsRemaining = 96;
  twoOfSpadesRemaining = 8;
  twoOfDiamondsRemaining = 8;
  twoOfClubsRemaining = 8;
  twoOfHeartsRemaining = 8;
  threeOfSpadesRemaining = 8;
  threeOfDiamondsRemaining = 8;
  threeOfClubsRemaining = 8;
  threeOfHeartsRemaining = 8;
  fourOfSpadesRemaining = 8;
  fourOfDiamondsRemaining = 8;
  fourOfClubsRemaining = 8;
  fourOfHeartsRemaining = 8;
  fiveOfSpadesRemaining = 8;
  fiveOfDiamondsRemaining = 8;
  fiveOfClubsRemaining = 8;
  fiveOfHeartsRemaining = 8;
  sixOfSpadesRemaining = 8;
  sixOfDiamondsRemaining = 8;
  sixOfClubsRemaining = 8;
  sixOfHeartsRemaining = 8;
  sevenOfSpadesRemaining = 8;
  sevenOfDiamondsRemaining = 8;
  sevenOfClubsRemaining = 8;
  sevenOfHeartsRemaining = 8;
  eightOfSpadesRemaining = 8;
  eightOfDiamondsRemaining = 8;
  eightOfClubsRemaining = 8;
  eightOfHeartsRemaining = 8;
  nineOfSpadesRemaining = 8;
  nineOfDiamondsRemaining = 8;
  nineOfClubsRemaining = 8;
  nineOfHeartsRemaining = 8;
  tenOfSpadesRemaining = 8;
  tenOfDiamondsRemaining = 8;
  tenOfClubsRemaining = 8;
  tenOfHeartsRemaining = 8;
  jackOfSpadesRemaining = 8;
  jackOfDiamondsRemaining = 8;
  jackOfClubsRemaining = 8;
  jackOfHeartsRemaining = 8;
  queenOfSpadesRemaining = 8;
  queenOfDiamondsRemaining = 8;
  queenOfClubsRemaining = 8;
  queenOfHeartsRemaining = 8;
  kingOfSpadesRemaining = 8;
  kingOfDiamondsRemaining = 8;
  kingOfClubsRemaining = 8;
  kingOfHeartsRemaining = 8;
  aceOfSpadesRemaining = 8;
  aceOfDiamondsRemaining = 8;
  aceOfClubsRemaining = 8;
  aceOfHeartsRemaining = 8;

  document.getElementById('runningCount').innerHTML = runningCount;
  document.getElementById('cardsDealt').innerHTML = cardsDealt;

  trueCountCalculation();
  lowCardPercentageCalculation();
  middleCardPercentageCalculation();
  highCardPercentageCalculation();
  decksRemainingCalculation();
  cardsRemainingFunction();

  statusHTML();
  statusStyle();

  twosRemainingPercentage();
  threesRemainingPercentage();
  foursRemainingPercentage();
  fivesRemainingPercentage();
  sixesRemainingPercentage();
  sevensRemainingPercentage();
  eightsRemainingPercentage();
  ninesRemainingPercentage();
  tensRemainingPercentage();
  jacksRemainingPercentage();
  queensRemainingPercentage();
  kingsRemainingPercentage();
  acesRemainingPercentage();
}



function decksRemainingCalculation() {
  if (cardsDealt < 27) {
    decksRemaining = 8;
  } else if (cardsDealt >= 27 && cardsDealt < 52) {
    decksRemaining = 7.5;
  } else if (cardsDealt >= 52 && cardsDealt < 78) {
    decksRemaining = 7;
  } else if (cardsDealt >= 78 && cardsDealt < 104) {
    decksRemaining = 6.5;
  } else if (cardsDealt >= 104 && cardsDealt < 130) {
    decksRemaining = 6;
  } else if (cardsDealt >= 130 && cardsDealt < 156) {
    decksRemaining = 5.5;
  } else if (cardsDealt >= 156 && cardsDealt < 182) {
    decksRemaining = 5;
  } else if (cardsDealt >= 182 && cardsDealt < 208) {
    decksRemaining = 4.5;
  } else if (cardsDealt >= 208 && cardsDealt < 234) {
    decksRemaining = 4;
  } else if (cardsDealt >= 234 && cardsDealt < 260) {
    decksRemaining = 3.5;
  } else if (cardsDealt >= 260 && cardsDealt < 286) {
    decksRemaining = 3;
  } else if (cardsDealt >= 286 && cardsDealt < 312) {
    decksRemaining = 2.5;
  } else if (cardsDealt >= 312 && cardsDealt < 338) {
    decksRemaining = 2;
  } else if (cardsDealt >= 338 && cardsDealt < 364) {
    decksRemaining = 1.5;
  } else if (cardsDealt >= 364 && cardsDealt < 390) {
    decksRemaining = 1;
  } else if (cardsDealt >= 390 && cardsDealt < 403) {
    decksRemaining = 0.50;
  } else decksRemaining = 0.25;


}

function trueCountCalculation() {
  let x = runningCount;
  
  let trueCount = x / decksRemaining;
  let n = trueCount.toFixed(2);

  document.getElementById('trueCount').innerHTML = n;  
  if (n > 1.9) {
    document.getElementById('trueCount').style.color = "darkgreen"; 
  }
}

function cardsRemainingCalculation(){
  cardsRemaining--;
}

function highCardsRemainingCalculation(){
  highCardsRemaining--;
}

function lowCardsRemainingCalculation(){
  lowCardsRemaining--;
}

function middleCardsRemainingCalculation(){
  middleCardsRemaining--;
}

function lowCardPercentageCalculation() {
  lowCardPercentage = (lowCardsRemaining / cardsRemaining) * 100;
  let n = lowCardPercentage.toFixed(2);
  document.getElementById('lowCardPercentage').innerHTML = n + "%";

  if (n >= 40) {
    document.getElementById('lowCardPercentage').style.color = "darkgreen";
  }
}

function middleCardPercentageCalculation() {
  middleCardPercentage = (middleCardsRemaining / cardsRemaining) * 100;
  let n = middleCardPercentage.toFixed(2);
  document.getElementById('middleCardPercentage').innerHTML = n + "%";

  if (n >= 24.7) {
    document.getElementById('middleCardPercentage').style.color = "darkgreen";
  }
}

function highCardPercentageCalculation() {
  highCardPercentage = (highCardsRemaining / cardsRemaining) * 100;
  let n = highCardPercentage.toFixed(2);
  document.getElementById('highCardPercentage').innerHTML = n + "%";

  if (n >= 40) {
    document.getElementById('highCardPercentage').style.color = "darkgreen";
  }
}


/*--------------PLAYING CARDS REMAINING---------------*/
function minusTwoOfSpades() {
  twoOfSpadesRemaining--;
  
  document.getElementById('twoOfSpadesRemaining').innerHTML = twoOfSpadesRemaining;
}

function minusTwoOfDiamonds() {
  twoOfDiamondsRemaining--;
  
  document.getElementById('twoOfDiamondsRemaining').innerHTML = twoOfDiamondsRemaining;
}

function minusTwoOfClubs() {
  twoOfClubsRemaining--;
  
  document.getElementById('twoOfClubsRemaining').innerHTML = twoOfClubsRemaining;
}

function minusTwoOfHearts() {
  twoOfHeartsRemaining--;
  
  document.getElementById('twoOfHeartsRemaining').innerHTML = twoOfHeartsRemaining;
}

function minusThreeOfSpades() {
  threeOfSpadesRemaining--;
  
  document.getElementById('threeOfSpadesRemaining').innerHTML = threeOfSpadesRemaining;
}
function minusThreeOfDiamonds() {
  threeOfDiamondsRemaining--;
  
  document.getElementById('threeOfDiamondsRemaining').innerHTML = threeOfDiamondsRemaining;
}

function minusThreeOfClubs() {
  threeOfClubsRemaining--;
  
  document.getElementById('threeOfClubsRemaining').innerHTML = threeOfClubsRemaining;
}

function minusThreeOfHearts() {
  threeOfHeartsRemaining--;
  
  document.getElementById('threeOfHeartsRemaining').innerHTML = threeOfHeartsRemaining;
}

function minusFourOfSpades() {
  fourOfSpadesRemaining--;
  
  document.getElementById('fourOfSpadesRemaining').innerHTML = fourOfSpadesRemaining;
}

function minusFourOfDiamonds() {
  fourOfDiamondsRemaining--;
  
  document.getElementById('fourOfDiamondsRemaining').innerHTML = fourOfDiamondsRemaining;
}

function minusFourOfClubs() {
  fourOfClubsRemaining--;
  
  document.getElementById('fourOfClubsRemaining').innerHTML = fourOfClubsRemaining;
}

function minusFourOfHearts() {
  fourOfHeartsRemaining--;
  
  document.getElementById('fourOfHeartsRemaining').innerHTML = fourOfHeartsRemaining;
}

function minusFiveOfSpades() {
  fiveOfSpadesRemaining--;
  
  document.getElementById('fiveOfSpadesRemaining').innerHTML = fiveOfSpadesRemaining;
}

function minusFiveOfDiamonds() {
  fiveOfDiamondsRemaining--;
  
  document.getElementById('fiveOfDiamondsRemaining').innerHTML = fiveOfDiamondsRemaining;
}

function minusFiveOfClubs() {
  fiveOfClubsRemaining--;
  
  document.getElementById('fiveOfClubsRemaining').innerHTML = fiveOfClubsRemaining;
}

function minusFiveOfHearts() {
  fiveOfHeartsRemaining--;
  
  document.getElementById('fiveOfHeartsRemaining').innerHTML = fiveOfHeartsRemaining;
}

function minusSixOfSpades() {
  sixOfSpadesRemaining--;
  
  document.getElementById('sixOfSpadesRemaining').innerHTML = sixOfSpadesRemaining;
}

function minusSixOfDiamonds() {
  sixOfDiamondsRemaining--;
  
  document.getElementById('sixOfDiamondsRemaining').innerHTML = sixOfDiamondsRemaining;
}

function minusSixOfClubs() {
  sixOfClubsRemaining--;
  
  document.getElementById('sixOfClubsRemaining').innerHTML = sixOfClubsRemaining;
}

function minusSixOfHearts() {
  sixOfHeartsRemaining--;
  
  document.getElementById('sixOfHeartsRemaining').innerHTML = sixOfHeartsRemaining;
}

function minusSevenOfSpades() {
  sevenOfSpadesRemaining--;
  
  document.getElementById('sevenOfSpadesRemaining').innerHTML = sevenOfSpadesRemaining;
}

function minusSevenOfDiamonds() {
  sevenOfDiamondsRemaining--;
  
  document.getElementById('sevenOfDiamondsRemaining').innerHTML = sevenOfDiamondsRemaining;
}

function minusSevenOfClubs() {
  sevenOfClubsRemaining--;
  
  document.getElementById('sevenOfClubsRemaining').innerHTML = sevenOfClubsRemaining;
}

function minusSevenOfHearts() {
  sevenOfHeartsRemaining--;
  
  document.getElementById('sevenOfHeartsRemaining').innerHTML = sevenOfHeartsRemaining;
}

function minusEightOfSpades() {
  eightOfSpadesRemaining--;
  
  document.getElementById('eightOfSpadesRemaining').innerHTML = eightOfSpadesRemaining;
}

function minusEightOfDiamonds() {
  eightOfDiamondsRemaining--;
  
  document.getElementById('eightOfDiamondsRemaining').innerHTML = eightOfDiamondsRemaining;
}

function minusEightOfClubs() {
  eightOfClubsRemaining--;
  
  document.getElementById('eightOfClubsRemaining').innerHTML = eightOfClubsRemaining;
}

function minusEightOfHearts() {
  eightOfHeartsRemaining--;
  
  document.getElementById('eightOfHeartsRemaining').innerHTML = eightOfHeartsRemaining;
}

function minusNineOfSpades() {
  nineOfSpadesRemaining--;
  
  document.getElementById('nineOfSpadesRemaining').innerHTML = nineOfSpadesRemaining;
}

function minusNineOfDiamonds() {
  nineOfDiamondsRemaining--;
  
  document.getElementById('nineOfDiamondsRemaining').innerHTML = nineOfDiamondsRemaining;
}

function minusNineOfClubs() {
  nineOfClubsRemaining--;
  
  document.getElementById('nineOfClubsRemaining').innerHTML = nineOfClubsRemaining;
}

function minusNineOfHearts() {
  nineOfHeartsRemaining--;
  
  document.getElementById('nineOfHeartsRemaining').innerHTML = nineOfHeartsRemaining;
}

function minusTenOfSpades() {
  tenOfSpadesRemaining--;
  
  document.getElementById('tenOfSpadesRemaining').innerHTML = tenOfSpadesRemaining;
}

function minusTenOfDiamonds() {
  tenOfDiamondsRemaining--;
  
  document.getElementById('tenOfDiamondsRemaining').innerHTML = tenOfDiamondsRemaining;
}

function minusTenOfClubs() {
  tenOfClubsRemaining--;
  
  document.getElementById('tenOfClubsRemaining').innerHTML = tenOfClubsRemaining;
}

function minusTenOfHearts() {
  tenOfHeartsRemaining--;
  
  document.getElementById('tenOfHeartsRemaining').innerHTML = tenOfHeartsRemaining;
}

function minusJackOfSpades() {
  jackOfSpadesRemaining--;
  
  document.getElementById('jackOfSpadesRemaining').innerHTML = jackOfSpadesRemaining;
}

function minusJackOfDiamonds() {
  jackOfDiamondsRemaining--;
  
  document.getElementById('jackOfDiamondsRemaining').innerHTML = jackOfDiamondsRemaining;
}

function minusJackOfClubs() {
  jackOfClubsRemaining--;
  
  document.getElementById('jackOfClubsRemaining').innerHTML = jackOfClubsRemaining;
}

function minusJackOfHearts() {
  jackOfHeartsRemaining--;
  
  document.getElementById('jackOfHeartsRemaining').innerHTML = jackOfHeartsRemaining;
}

function minusQueenOfSpades() {
  queenOfSpadesRemaining--;
  
  document.getElementById('queenOfSpadesRemaining').innerHTML = queenOfSpadesRemaining;
}

function minusQueenOfDiamonds() {
  queenOfDiamondsRemaining--;
  
  document.getElementById('queenOfDiamondsRemaining').innerHTML = queenOfDiamondsRemaining;
}

function minusQueenOfClubs() {
  queenOfClubsRemaining--;
  
  document.getElementById('queenOfClubsRemaining').innerHTML = queenOfClubsRemaining;
}

function minusQueenOfHearts() {
  queenOfHeartsRemaining--;
  
  document.getElementById('queenOfHeartsRemaining').innerHTML = queenOfHeartsRemaining;
}

function minusKingOfSpades() {
  kingOfSpadesRemaining--;
  
  document.getElementById('kingOfSpadesRemaining').innerHTML = kingOfSpadesRemaining;
}

function minusKingOfDiamonds() {
  kingOfDiamondsRemaining--;
  
  document.getElementById('kingOfDiamondsRemaining').innerHTML = kingOfDiamondsRemaining;
}

function minusKingOfClubs() {
  kingOfClubsRemaining--;
  
  document.getElementById('kingOfClubsRemaining').innerHTML = kingOfClubsRemaining;
}

function minusKingOfHearts() {
  kingOfHeartsRemaining--;
  
  document.getElementById('kingOfHeartsRemaining').innerHTML = kingOfHeartsRemaining;
}

function minusAceOfSpades() {
  aceOfSpadesRemaining--;
  
  document.getElementById('aceOfSpadesRemaining').innerHTML = aceOfSpadesRemaining;
}

function minusAceOfDiamonds() {
  aceOfDiamondsRemaining--;
  
  document.getElementById('aceOfDiamondsRemaining').innerHTML = aceOfDiamondsRemaining;
}

function minusAceOfClubs() {
  aceOfClubsRemaining--;
  
  document.getElementById('aceOfClubsRemaining').innerHTML = aceOfClubsRemaining;
}

function minusAceOfHearts() {
  aceOfHeartsRemaining--;
  
  document.getElementById('aceOfHeartsRemaining').innerHTML = aceOfHeartsRemaining;
}

/*--------------PLAYING CARDS PERCENTAGE REMAINING---------------*/

function twosRemainingPercentage() {
  let x = (twoOfSpadesRemaining + twoOfDiamondsRemaining + twoOfClubsRemaining + twoOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfTwos').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfTwos').style.color = "darkgreen";
  } else document.getElementById('percentOfTwos').style.color = "rgb(255, 131, 230)";

 
}

function threesRemainingPercentage() {
  let x = (threeOfSpadesRemaining + threeOfDiamondsRemaining + threeOfClubsRemaining + threeOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfThrees').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfThrees').style.color = "darkgreen";
  } else document.getElementById('percentOfThrees').style.color = "rgb(255, 131, 230)";
  
  
}

function foursRemainingPercentage() {
  let x = (fourOfSpadesRemaining + fourOfDiamondsRemaining + fourOfClubsRemaining + fourOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfFours').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfFours').style.color = "darkgreen";
  } else document.getElementById('percentOfFours').style.color = "rgb(255, 131, 230)";
  
}

function fivesRemainingPercentage() {
  let x = (fiveOfSpadesRemaining + fiveOfDiamondsRemaining + fiveOfClubsRemaining + fiveOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfFives').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfFives').style.color = "darkgreen";
  } else document.getElementById('percentOfFives').style.color = "rgb(255, 131, 230)";
  
}

function sixesRemainingPercentage() {
  let x = (sixOfSpadesRemaining + sixOfDiamondsRemaining + sixOfClubsRemaining + sixOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfSixes').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfSixes').style.color = "darkgreen";
  } else document.getElementById('percentOfSixes').style.color = "rgb(255, 131, 230)";
  
}

function sevensRemainingPercentage() {
  let x = (sevenOfSpadesRemaining + sevenOfDiamondsRemaining + sevenOfClubsRemaining + sevenOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfSevens').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfSevens').style.color = "darkgreen";
  } else document.getElementById('percentOfSevens').style.color = "rgb(255, 131, 230)";
  
}

function eightsRemainingPercentage() {
  let x = (eightOfSpadesRemaining + eightOfDiamondsRemaining + eightOfClubsRemaining + eightOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfEights').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfEights').style.color = "darkgreen";
  } else document.getElementById('percentOfEights').style.color = "rgb(255, 131, 230)";
  
}

function ninesRemainingPercentage() {
  let x = (nineOfSpadesRemaining + nineOfDiamondsRemaining + nineOfClubsRemaining + nineOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfNines').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfNines').style.color = "darkgreen";
  } else document.getElementById('percentOfNines').style.color = "rgb(255, 131, 230)";
  
}

function tensRemainingPercentage() {
  let x = (tenOfSpadesRemaining + tenOfDiamondsRemaining + tenOfClubsRemaining + tenOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfTens').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfTens').style.color = "darkgreen";
  } else document.getElementById('percentOfTens').style.color = "rgb(255, 131, 230)";
  
} 

function jacksRemainingPercentage() {
  let x = (jackOfSpadesRemaining + jackOfDiamondsRemaining + jackOfClubsRemaining + jackOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfJacks').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfJacks').style.color = "darkgreen";
  } else document.getElementById('percentOfJacks').style.color = "rgb(255, 131, 230)";
  
}

function queensRemainingPercentage() {
  let x = (queenOfSpadesRemaining + queenOfDiamondsRemaining + queenOfClubsRemaining + queenOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfQueens').innerHTML = z + "%";
  
  if (z >= 8.5) {
    document.getElementById('percentOfQueens').style.color = "darkgreen";
  } else document.getElementById('percentOfQueens').style.color = "rgb(255, 131, 230)";
}

function kingsRemainingPercentage() {
  let x = (kingOfSpadesRemaining + kingOfDiamondsRemaining + kingOfClubsRemaining + kingOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfKings').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfKings').style.color = "darkgreen";
  } else document.getElementById('percentOfKings').style.color = "rgb(255, 131, 230)";
  
}

function acesRemainingPercentage() {
  let x = (aceOfSpadesRemaining + aceOfDiamondsRemaining + aceOfClubsRemaining + aceOfHeartsRemaining) / cardsRemaining;
  let y = x * 100;
  let z = y.toFixed(2);
  document.getElementById('percentOfAces').innerHTML = z + "%";

  if (z >= 8.5) {
    document.getElementById('percentOfAces').style.color = "darkgreen";
  } else document.getElementById('percentOfAces').style.color = "rgb(255, 131, 230)";
  
}





/*--------------FACTORY FUNCTIONS---------------*/

function statusHTML() {
    if (document.getElementById('trueCount').innerHTML > 2 && document.getElementById('trueCount').innerHTML <= 4) {
    document.getElementById('status').innerHTML = "BET";
  } else if (document.getElementById('trueCount').innerHTML > 4 ) {
    document.getElementById('status').innerHTML = "BIG BET!";
  } else if (document.getElementById('trueCount').innerHTML < 0 && document.getElementById('trueCount').innerHTML >= -2) {
    document.getElementById('status').innerHTML = "Cold";
  } else if (document.getElementById('trueCount').innerHTML < -2 && document.getElementById('trueCount').innerHTML) {
    document.getElementById('status').innerHTML = "HOLD!";
  } else if (document.getElementById('trueCount').innerHTML === 0) {
    document.getElementById('status').innerHTML = "Moderate";
  } else document.getElementById('status').innerHTML = "Moderate";
}

function statusStyle() {
  if (document.getElementById('trueCount').innerHTML > 2 && document.getElementById('trueCount').innerHTML <= 4) {
    document.getElementById('status').style.color = "lightgreen";
  } else if (document.getElementById('trueCount').innerHTML > 4 ) {
    document.getElementById('status').style.color = "darkgreen";
  } else if (document.getElementById('trueCount').innerHTML < 0 && document.getElementById('trueCount').innerHTML >= -2) {
    document.getElementById('status').style.color = "pink";
  } else if (document.getElementById('trueCount').innerHTML < -2 && document.getElementById('trueCount').innerHTML) {
    document.getElementById('status').style.color = "darkred";
  } else if (document.getElementById('trueCount').innerHTML === 0) {
    document.getElementById('status').style.color = "rgb(100, 100, 255)";
  } else document.getElementById('status').style.color = "rgb(100, 100, 255)";
  
}

function cardsRemainingFunction() {
  document.getElementById('cardsRemaining').innerHTML = cardsRemaining;
}





