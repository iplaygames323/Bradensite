const dot = document.querySelector('.dot');
const goldText = document.querySelector('.goldText');
const upgradeButton = document.querySelector('.upgradeButton');
const upgradeButton2 = document.querySelector('.upgradeButton2');
const upgradeButton3 = document.querySelector('.upgradeButton3');
const upgrade1Text = document.querySelector('.upgrade1Text');
const upgrade2Text = document.querySelector('.upgrade2Text');
const upgrade3Text = document.querySelector('.upgrade3Text');
const multText = document.querySelector('.multText');
const costText = document.querySelector('.costText');
const expoText = document.querySelector('.expoText');
const checkbox = document.querySelector('.slider');
const isChecked = checkbox.checked

let gold = 0;
let goldMult = 1;
let cost = 10;
let goldExpo = 1;
let expoCost = 1000;
let autoCost = 100;
let autoLvl = 0
let autoInterval = 1000;

function buttonClicked() {
  gold += Math.floor(1 * goldMult ** goldExpo);
  goldText.innerText = 'Gold: ' + gold;
  alert(themeValue);
}

function upgrade1Down() { 
  if (gold >= cost) {
  upgradeButton.innerText = "Bought!"
  } else { 
   upgradeButton.classList.add('poor');
   upgradeButton.classList.add('shrink');
   upgradeButton.innerText = "not enough";
  }
}

function upgrade2Down() { 
  if (gold >= expoCost) {
  upgradeButton2.innerText = "Bought!"
  } else { 
   upgradeButton2.classList.add('poor');
   upgradeButton2.classList.add('shrink');
   upgradeButton2.innerText = "not enough";
  }
}

function upgrade3Down() { 
  if (gold >= autoCost) {
  upgradeButton3.innerText = "Bought!"
  } else { 
   upgradeButton3.classList.add('poor');
   upgradeButton3.classList.add('shrink');
   upgradeButton3.innerText = "not enough";
  }
}

function upgrade1Up() { 
    upgradeButton.classList.remove('shrink');
    upgradeButton.classList.add('grow');
    upgradeButton.classList.remove('poor');
    upgradeButton.innerText = 'add upgrade'
}

function upgrade2Up() { 
    upgradeButton2.classList.remove('shrink');
    upgradeButton2.classList.add('grow');
    upgradeButton2.classList.remove('poor');
    upgradeButton2.innerText = 'add upgrade'
}

function upgrade3Up() { 
  upgradeButton3.classList.remove('shrink');
  upgradeButton3.classList.add('grow');
  upgradeButton3.classList.remove('poor');
  upgradeButton3.innerText = 'add upgrade'
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function buyUpgrade1() {
  if (gold >= cost ) { 
    gold -= cost;
    goldText.innerText = 'Gold: ' + gold;
    goldMult += 1
    multText.innerText = 'Mult: ' + goldMult;
    cost  += Math.floor(goldMult ** 2 * goldExpo);
    upgrade1Text.innerText = "increases multiplier on click costs: " + cost + " gold"
  }
} 

function buyUpgrade2() {
  if (gold >= expoCost ) { 
    gold -= expoCost;
    goldText.innerText = 'Gold: ' + gold;
    goldExpo += .065
    goldExpo = Math.round(goldExpo * 1000) / 1000;
    expoText.innerText = 'Expo: ' + goldExpo;
    expoCost  += Math.floor(10 ** goldExpo);
    upgrade2Text.innerText = "increases exponent on click costs: " + expoCost + " gold"
  }
} 

function buyUpgrade3() {
  if (gold >= autoCost ) { 
    gold -= autoCost;
    goldText.innerText = 'Gold: ' + gold;
    autoLvl += 1;
    autoCost += getRandomIntInclusive(1, 500);
    upgrade3Text.innerText = "buy auto clicker costs: " + autoCost + " gold Level: " + autoLvl;
  }
} 

do {
  setInterval(function() {
    gold += (Math.floor(1 * goldMult ** goldExpo) * autoLvl);
  goldText.innerText = 'Gold: ' + gold;
  }, getRandomIntInclusive(100, 1000)
  );
} while (autoLvl >= 1)

function cheat() { 
  gold += 1000
  goldText.innerText = 'Gold: ' + gold;
}

if (ischecked) { 
  alert("checked")
}
/*
above this comment is the basic foundation 
todo add numbers that appear when i click the button and fade away
rework the cost growth functions to be better 
add cat skin for tobi
figure out the theme for my game so i can style it better
add a rebirth mechanic maybe rework exponents for that so sclaing is better?
have fun
*/