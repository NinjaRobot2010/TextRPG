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
      parentItem.uses();
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
  mainPlayer.possibleCommands.push(
    new Command(mainPlayer.possibleCommands.length + 1, function () {
      displayConnections = true;
      displayInventory = false;
      displayInventoryCommand = true;
      UpdateGame();
    })
  );
  optionTexts[
    mainPlayer.possibleCommands.length - 1
  ].textContent = `${mainPlayer.possibleCommands.length} Back`;
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

let paper = new Item("Paper", function () {
  console.log("The paper item has been used");
});

let pencil = new Item("Pencil", function () {
  console.log("The pencil item has been used");
});

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
