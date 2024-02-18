const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

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
};

let punch = {
  name: "punch",
  dmg: 10,
  outcome: function (caster, target) {
    let recipientChoiceText = "";
    for (let i = 0; i < targets.length; i++) {
      console.log(targets.length);
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

let afterNoonDelight = {
  name: "Afternoon Delight",
  heal: 20,
  outcome: function (caster, target) {
    let recipientChoiceText = "";
    for (let i = 0; i < targets.length; i++) {
      console.log(targets.length);
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

let targets = [hero, enemy];

let moves = [punch, afterNoonDelight];

const option = function (choices) {
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
  console.log(Number.isInteger(input));

  if (input <= choices.length && input > 0) {
    choices[input - 1].outcome(hero);
    check();
  } else {
    option(choices);
  }
};

const check = function () {
  if (enemy.hp <= 0) {
    alert(`You win!`);
  } else if (hero.hp <= 0) {
    alert(`You lose`);
  } else {
    punch.outcome(enemy, hero);
    if (hero.hp <= 0) {
      alert(`You lose`);
    } else {
      option(moves);
    }
    if (hero.hp > 0) {
      check();
    }
  }
};

alert(`A ${enemy.name} attackes you!`);
option(moves);
check();
