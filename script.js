const canvas = document.querySelector("#canvas");
const textInput = document.querySelector("#textInput");
const optionTexts = document.querySelectorAll(".optionText");
const resultText = document.querySelector("#resultText");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
  constructor(inventory, location, possibleCommands, selectedItem) {
    this.inventory = inventory;
    this.location = location;
    this.possibleCommands = possibleCommands;
    this.selectedItem = selectedItem;
  }
}

class Uses {
  constructor(description, action) {
    this.description = description;
    this.action = action;
  }
}

class Item {
  constructor(name, uses) {
    this.name = name;
    this.uses = uses;
  }

  executeUse(i) {
    this.uses[i].action();
  }
}

class Location {
  constructor(name, description, connections = []) {
    this.name = name;
    this.description = description;
    this.connections = connections;
  }

  addConnection(location) {
    for (let i = 0; i < location.length; i++) {
      this.connections.push(location[i]);
    }
  }
}

class Command {
  constructor(commandKey, commandFunction) {
    this.commandKey = commandKey;
    this.commandFunction = commandFunction;
  }
  executeCommand() {
    this.commandFunction();
  }
}

class MoveCommand extends Command {
  constructor(commandKey, destination) {
    super(commandKey, function () {
      mainPlayer.location = destination;
      UpdateGame();
    });
    this.destination = destination;
  }
}

class ItemCommand extends Command {
  constructor(commandKey, parentItem) {
    super(commandKey, function () {
      mainPlayer.selectedItem = parentItem;
      UpdateGame();
    });
    this.parentItem = parentItem;
  }
}

class InventoryCommand extends Command {
  constructor(commandKey) {
    super(commandKey, function () {
      displayConnections = false;
      displayInventoryCommand = false;
      displayInventory = true;
      UpdateGame();
    });
  }
}

let createMoveCommands = function () {
  for (let i = 0; i < mainPlayer.location.connections.length; i++) {
    mainPlayer.possibleCommands.push(
      new MoveCommand(i + 1, mainPlayer.location.connections[i])
    );
  }
  for (let i = 0; i < optionTexts.length; i++) {
    if (mainPlayer.location.connections[i] !== undefined) {
      optionTexts[i].textContent = `${i + 1} ${
        mainPlayer.location.connections[i].name
      }`;
    } else {
      optionTexts[i].textContent = "";
    }
  }
};

let createItemCommands = function () {
  for (let i = 0; i < mainPlayer.inventory.length; i++) {
    mainPlayer.possibleCommands.push(
      new ItemCommand(i + 1, mainPlayer.inventory[i])
    );
  }
  for (let i = 0; i < optionTexts.length; i++) {
    if (mainPlayer.inventory[i] !== undefined) {
      optionTexts[i].textContent = `${i + 1} ${mainPlayer.inventory[i].name}`;
    } else {
      optionTexts[i].textContent = "";
    }
  }
};

let createInventoryCommand = function () {
  mainPlayer.possibleCommands.push(
    new InventoryCommand(mainPlayer.possibleCommands.length + 1)
  );
  for (let i = 0; i < mainPlayer.possibleCommands.length; i++) {
    if (mainPlayer.possibleCommands[i] instanceof InventoryCommand) {
      optionTexts[i].textContent = `${i + 1} Inventory`;
    }
  }
};

let paper = new Item("Paper");

let pencil = new Item("Pencil");

let backyard = new Location(
  "Backyard",
  "Your backyard, the second location of the game"
);

let house = new Location(
  "House",
  "Your house, the first location of the game "
);

let frontYard = new Location(
  "Frontyard",
  "Your Frontyard, the third locaton of the game"
);

backyard.addConnection([house]);

house.addConnection([backyard, frontYard]);

frontYard.addConnection([house]);

let mainPlayer = new Player([paper, pencil], house, [], undefined);

let displayConnections = true;
let displayInventory = false;
let displayInventoryCommand = true;

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    for (let i = 0; i < mainPlayer.possibleCommands.length; i++) {
      if (textInput.value == mainPlayer.possibleCommands[i].commandKey) {
        mainPlayer.possibleCommands[i].executeCommand();
        UpdateGame();
      }
    }
    textInput.value = "";
  }
});

let UpdateGame = function () {
  mainPlayer.possibleCommands = [];
  resultText.textContent = mainPlayer.location.description;

  if (displayConnections == true) {
    createMoveCommands();
  }
  if (displayInventory == true) {
    createItemCommands();
  }
  if (displayInventoryCommand == true) {
    createInventoryCommand();
  }
};

UpdateGame();

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
