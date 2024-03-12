const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let punch = {
  name: "punch",
  dmg: 10,
  outcome: function (caster, target) {
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
    recipient.hp = recipient.hp - this.dmg;
    alert(`${recipient.name} receives ${this.dmg} Dmg`);
    alert(`${recipient.name}'s HP is ${recipient.hp}/${recipient.maxHP}`);
  },
};

let heal = {
  name: "Heal",
  heal: 20,
  outcome: function (caster, target) {
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
    if (recipient.hp + this.heal > recipient.maxHP) {
      alert(`${recipient.name} heals ${recipient.maxHP - recipient.hp} HP`);
      recipient.hp = recipient.maxHP;
    } else {
      alert(`${recipient.name} heals ${this.heal} HP`);
      recipient.hp = recipient.hp + this.heal;
    }
    alert(`${recipient.name}'s HP is ${recipient.hp}/${recipient.maxHP}`);
  },
};

let enemy = {
  name: "Zombie",
  isPlayer: false,
  maxHP: 100,
  hp: 100,
};

let hero = {
  isPlayer: true,
  name: "Henry",
  maxHP: 100,
  hp: 100,
  energy: 100,
  abilities: [punch, heal],
};

let hero_2 = {
  isPlayer: true,
  name: "Charlie",
  maxHP: 100,
  hp: 100,
  energy: 100,
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

let moves = [punch, heal];

const option = function (choices, performer) {
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

  if (input <= choices.length && input > 0) {
    console.log(performer);
    choices[input - 1].outcome(performer);
    //check();
  } else if (input == dev) {
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
  punch.outcome(enemy, hero);
};

check();
