const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let enemy = {
  name: "Zombie",
  maxHP: 100,
  hp: 100,
};

let hero = {
  name: "Henry",
  maxHP: 100,
  hp: 100,
  energy: 100,
};

let punch = {
  name: "punch",
  isAttack: true,
  isHeal: false,
  dmg: 20,
  eng: 10,
};

let afterNoonDelight = {
  name: "Afternoon Delight",
  isAttack: false,
  isHeal: true,
  heal: 40,
  eng: 20,
};

let targets = [hero, enemy];

let moves = [punch, afterNoonDelight];

const performMove = function (caster, target, type) {
  if (type == undefined) {
    option(moves);
  } else {
    alert(`${caster.name} uses ${type.name}`);
    console.log(type);
    if (type.isAttack == true) {
      target.hp = target.hp - type.dmg;
      alert(`${target.name} receives ${type.dmg} Dmg`);
      alert(`${target.name}'s HP is ${target.hp}/${target.maxHP}`);
    }
    if (type.isHeal == true) {
      if (target.hp + type.heal > target.maxHP) {
        alert(`${target.name} heals ${target.maxHP - target.hp} HP`);
        target.hp = target.maxHP;
      } else {
        alert(`${target.name} heals ${type.heal} HP`);
        target.hp = target.hp + type.heal;
      }
      alert(`${target.name}'s HP is ${target.hp}/${target.maxHP}`);
    }
  }
};
let choiceText = "";
const option = function (choices) {
  console.log(choices);
  choiceText = "";
  for (let i = 0; i < choices.length; i++) {
    console.log(choices.length);
    choiceText += ` ${i + 1}) ${choices[i].name}`;
    if (choices[i].isAttack == true) {
      choiceText += `(${choices[i].dmg} Dmg)`;
    }
    if (choices[i].isHeal == true) {
      choiceText += `(${choices[i].heal} HP)`;
    }
  }
  let input = prompt(`${choiceText}`);
  if (choices && input <= choices.length) {
    let target = prompt(`Target(${targets})`);
    console.log(target);
    performMove(hero, targets[target] - 1, choices[input - 1]);
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
    performMove(enemy, hero, punch);
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
