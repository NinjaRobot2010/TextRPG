const canvas = document.querySelector("#canvas");
const textInput = document.querySelector("#textInput");
export const optionTexts = document.querySelectorAll(".optionText");
const resultText = document.querySelector("#resultText");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

import { CategoryCommand, User } from "./classes.js";
import { Character } from "./classes.js";
import { Party } from "./classes.js";
import { Item } from "./classes.js";
import { Location } from "./classes.js";
import { NPC } from "./classes.js";
import { Enemy } from "./classes.js";
import { Quest } from "./classes.js";
import { Ability } from "./classes.js";
import { Class } from "./classes.js";
import { Command } from "./classes.js";
import { MoveCommand } from "./classes.js";
import { ItemCommand } from "./classes.js";
import { Loot } from "./classes.js";

let testUser = new User("test", "test");

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

backyard.addConnections([house]);

house.addConnections([backyard, frontYard]);

frontYard.addConnections([house]);

export let mainPlayer = new Party(
  "RobotNinja@2010",
  house,
  [],
  undefined,
  [],
  []
);

let createMoveCommands = function () {
  for (let i = 0; i < mainPlayer.location.connections.length; i++) {
    mainPlayer.possibleCommands.push(
      new MoveCommand(
        undefined,
        mainPlayer.location.connections[i],
        mainPlayer.location.connections[i].name
      )
    );
  }
};

mainPlayer.possibleCommands.push();

let createCategoryCommand = function (commandType, displayName) {
  mainPlayer.possibleCommands.push(
    new CategoryCommand(undefined, commandType, displayName)
  );
};

let displayCategoryCommands = new CategoryCommand(
  undefined,
  CategoryCommand,
  true
);
let displayMoveCommandsUpdated = new CategoryCommand(
  undefined,
  MoveCommand,
  "Travel"
);

let displayMoveCommands = function () {
  for (let i = 0; i < mainPlayer.possibleCommands.length; i++) {
    if (mainPlayer.possibleCommands[i] instanceof MoveCommand) {
      mainPlayer.possibleCommands[i].displayed = true;
    }
  }
};

let displayCommands = function () {
  for (let i = 0; i < optionTexts.length; i++) {
    let counter = 0;
    //console.log(mainPlayer.possibleCommands[i].displayed);
    if (
      mainPlayer.possibleCommands[i] !== undefined &&
      mainPlayer.possibleCommands[i].displayed
    ) {
      counter++;
      mainPlayer.possibleCommands[i].commandKey = counter;
      optionTexts[
        i
      ].textContent = `${counter} ${mainPlayer.possibleCommands[i].displayName}`;
    } else {
      optionTexts[i].textContent = "";
    }
  }
};

export let updateGame = function () {
  mainPlayer.possibleCommands = [];
  for (let i = 0; i < mainPlayer.possibleCommands.length; i++) {}
  resultText.textContent = mainPlayer.location.description;
  createMoveCommands();
  createCategoryCommand(MoveCommand, "Travel");
  displayCategoryCommands.commandFunction();
  //displayMoveCommands();
  //createItemCommands();
  //createInventoryCommand();
  displayCommands();
};

/*
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
      updateGame();
    })
  );
  optionTexts[
    mainPlayer.possibleCommands.length - 1
  ].textContent = `${mainPlayer.possibleCommands.length} Back`;
};
*/
let createInventoryCommand = function () {};

/*let paper = new Item("Paper", function () {
  console.log("The paper item has been used");
});
*/

/*
let pencil = new Item("Pencil", function () {
  console.log("The pencil item has been used");
});
*/

updateGame();

console.log(mainPlayer.possibleCommands);
document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    for (let i = 0; i < mainPlayer.possibleCommands.length; i++) {
      if (
        textInput.value == mainPlayer.possibleCommands[i].commandKey &&
        mainPlayer.possibleCommands[i].displayed
      ) {
        updateGame();
        console.log(mainPlayer.possibleCommands);
        console.log(mainPlayer.possibleCommands[i]);
        // console.log(mainPlayer.possibleCommands);
        mainPlayer.possibleCommands[i].executeCommand();
      }
    }
    textInput.value = "";
    // delete this later
    for (let i = 0; i < mainPlayer.possibleCommands.length; i++) {
      console.log(mainPlayer.possibleCommands);
    }
  }
});

console.log(mainPlayer.possibleCommands);
console.log(displayCategoryCommands.commandFunction);
console.log(mainPlayer.possibleCommands[0]);
console.log(mainPlayer.possibleCommands[0].displayed);
