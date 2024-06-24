const canvas = document.querySelector("#canvas");
const textInput = document.querySelector("#textInput");
const optionTexts = document.querySelector(".optionText");
const resultText = document.querySelector("#resultText");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
resultText.textContent = "result";

class Command {
  constructor(commandKey, commandFunction) {
    this.commandKey = commandKey;
    this.commandFunction = commandFunction;
  }
  executeCommand() {
    this.commandFunction();
  }
}

let testCommand = new Command("execute", function () {
  console.log("testCommand");
});

let possibleCommands = [testCommand];

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    for (let i = 0; i < possibleCommands.length; i++) {
      if (textInput.value == possibleCommands[i].commandKey) {
        possibleCommands[i].executeCommand();
      }
    }
    textInput.value = "";
  }
});

/*
class move {
  constructor(name, engReq, outcome) {
    this.name = name;
    this.engReq = engReq;
    this.outcome = outcome;
  }

  
  performMove(caster, target) {
    alert(`${caster.name} uses ${this.name}`);
    this.outcome(caster, target);
    caster.energy -= this.engReq;
    alert(`${caster.name}'s Eng is ${caster.energy}/${caster.maxEnergy}`);
  }
}

let punch = new move("punch", 10, function (caster, target) {
  let recipientChoiceText = "";
  for (let i = 0; i < targets.length; i++) {
    recipientChoiceText += ` ${i + 1}) ${targets[i].name}`;
  }
  let recipient;
  if (caster.isPlayer == true) {
    recipient = targets[prompt(`${recipientChoiceText}`) - 1];
  } else {
    recipient = target;
  }
  recipient.hp = recipient.hp - 10;
  alert(`${recipient.name} receives 10 Dmg`);
  alert(`${recipient.name}'s HP is ${recipient.hp}/${recipient.maxHP}`);
});

let heal = new move("heal", 50, function (caster, target) {
  let recipientChoiceText = "";
  for (let i = 0; i < targets.length; i++) {
    recipientChoiceText += ` ${i + 1}) ${targets[i].name}`;
  }
  let recipient;
  if (caster.isPlayer == true) {
    recipient = targets[prompt(`${recipientChoiceText}`) - 1];
  } else {
    recipient = target;
  }
  alert(`${caster.name} uses ${this.name}`);
  if (recipient.hp + 10 > recipient.maxHP) {
    alert(`${recipient.name} heals ${recipient.maxHP - recipient.hp} HP`);
    recipient.hp = recipient.maxHP;
  } else {
    alert(`${recipient.name} heals 10 HP`);
    recipient.hp = recipient.hp + 10;
  }
  alert(`${recipient.name}'s HP is ${recipient.hp}/${recipient.maxHP}`);
});

const calcATKPower = function () {};

let enemy = {
  name: "Zombie",
  isPlayer: false,
  maxHP: 100,
  hp: 100,
  maxEnergy: 100,
  energy: 100,
  equipment: {
    rune1: undefined,
    rune2: undefined,
    rune3: undefined,
    rune4: undefined,
    rune5: undefined,
    weapon: undefined,
  },
};

let hero = {
  isPlayer: true,
  name: "Henry",
  maxHP: 100,
  hp: 100,
  energy: 100,
  maxEnergy: 100,
  energy: 100,
  abilities: [punch, heal],
  equipment: {
    rune1: undefined,
    rune2: undefined,
    rune3: undefined,
    rune4: undefined,
    rune5: undefined,
    weapon: undefined,
  },
};

let hero_2 = {
  isPlayer: true,
  name: "Charlie",
  maxHP: 100,
  hp: 100,
  energy: 100,
  maxEnergy: 100,
  abilities: [heal],
};

let entities = [hero, hero_2, enemy];
let playerEntities = [];
for (i = 0; i < entities.length; i++) {
  console.log[i];
  if (entities[i].isPlayer == true) {
    playerEntities.push(entities[i]);
  }
}

let targets = entities;

let gameMoves = [punch, heal];

const option = function (choices, performer) {
  console.log(performer);
  let choiceText = "";
  for (let i = 0; i < choices.length; i++) {
    choiceText += ` ${i + 1}) ${choices[i].name}`;
    if (choices[i].isAttack == true) {
      choiceText += `(${choices[i].dmg} Dmg)`;
    }
    if (choices[i].isHeal == true) {
      choiceText += `(${choices[i].heal} HP)`;
    }
  }
  let input = parseInt(prompt(`${choiceText}`));

  if (
    input <= choices.length &&
    input > 0 &&
    choices[input - 1].engReq < performer.energy
  ) {
    console.log(performer);
    choices[input - 1].performMove(performer);
    //check();
  } else if (input == "dev") {
  } else {
    option(choices, performer);
  }
};

const check = function () {
  if (enemy.hp <= 0) {
    alert(`You win!`);
  } else if (hero.hp <= 0) {
    alert(`You lose`);
  } else {
    for (i = 0; i < playerEntities.length; i++) {
      option(playerEntities[i].abilities, playerEntities[i]);
    }
    enemyTurn();
    check();
  }
};

const enemyTurn = function () {
  punch.performMove(enemy, hero);
};

check();
*/
