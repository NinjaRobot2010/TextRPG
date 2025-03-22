import { mainPlayer } from "./main.js";
import { updateGame } from "./main.js";
import { optionTexts } from "./main.js";

export class User {
  username;
  password;

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  verifyPassword(value) {
    return value === this.password;
  }
}

export class Character {
  partyId;
  classId;
  name;
  health;
  maxHealth;
  energy;
  maxEnergy;

  constructor(partyId, classId, name, health, maxHealth, energy, maxEnergy) {
    this.partyId = partyId;
    this.classId = classId;
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
    this.energy = energy;
    this.maxEnergy = maxEnergy;
  }
}

export class Party {
  username;
  location;
  level;
  xp;

  constructor(username, location, level, xp, inventory, possibleCommands) {
    this.username = username;
    this.location = location;
    this.level = level;
    this.xp = xp;
    this.inventory = inventory;
    this.possibleCommands = possibleCommands;
  }
}

export class Item {
  name;
  uses;
  description;
  cost;
  value;
  multiplier;

  constructor(name, uses, description, cost, value, multiplier) {
    this.name = name;
    this.uses = uses;
    this.description = description;
    this.cost = cost;
    this.value = value;
    this.multiplier = multiplier;
  }

  executeUse(i) {
    this.uses[i].action();
  }
}

export class Location {
  name;
  description;
  connections;
  npcs;

  constructor(name, description, connections = [], npcs, events) {
    this.name = name;
    this.description = description;
    this.connections = connections;
    this.npcs = npcs;
    this.events = events;
  }

  addConnections(value) {
    for (let i = 0; i < value.length; i++) {
      this.connections.push(value[i]);
    }
  }
}

export class NPC {
  name;
  location_id;
  item_ids;
  event_id;
  dialogue;

  constructor(name, location_id, item_ids, event_id, dialogue) {
    this.name = name;
    this.location_id = location_id;
    this.item_ids = item_ids;
    this.event_id = event_id;
    this.dialogue = dialogue;
  }
}

export class Enemy {
  name;
  health;
  max_health;
  energy;
  max_energy;

  constructor(name, health, max_health, energy, max_energy) {
    this.name = name;
    this.health = health;
    this.max_health = max_health;
    this.energy = energy;
    this.max_energy = max_energy;
  }
}

export class Quest {
  constructor(npc_id, name, opening_dialogue, closing_dialogue) {
    this.npc_id = npc_id;
    this.name = name;
    this.opening_dialogue = opening_dialogue;
    this.closing_dialogue = closing_dialogue;
  }
}

export class Ability {
  constructor(name, description, energy, value, multiplier) {
    this.name = name;
    this.description = description;
    this.energy = energy;
    this.value = value;
    this.multiplier = multiplier;
  }
}

export class Class {
  constructor(name) {
    this.name = name;
  }
}

export class Command {
  constructor(commandKey, commandFunction, displayName, displayed) {
    this.commandKey = commandKey;
    this.commandFunction = commandFunction;
    this.displayName = displayName;
  }
  executeCommand() {
    this.commandFunction();
  }
}

export class CategoryCommand extends Command {
  constructor(commandKey, CommandsType, displayName, displayed) {
    super(commandKey, function () {
      this.displayed = false;
      for (let i = 0; i < mainPlayer.possibleCommands.length; i++) {
        if (mainPlayer.possibleCommands[i] instanceof CommandsType) {
          mainPlayer.possibleCommands[i].displayed = true;
          console.log("executed");
          console.log(mainPlayer.possibleCommands[i].displayed);
        }
      }
      for (let i = 0; i < optionTexts.length; i++) {
        optionTexts[i].textContent = "";
      }
      for (let i = 0; i < optionTexts.length; i++) {
        if (
          mainPlayer.possibleCommands[i] !== undefined &&
          mainPlayer.possibleCommands[i].displayed == true
        ) {
          mainPlayer.possibleCommands[i].commandKey = i + 1;
          optionTexts[i].textContent = `${i + 1} ${
            mainPlayer.possibleCommands[i].displayName
          }`;
          // console.log(mainPlayer.possibleCommands[i].displayName);
        } else {
          optionTexts[i].textContent = "";
        }
      }
      console.log(mainPlayer.possibleCommands);
    });
    this.displayName = displayName;
  }
}

export class MoveCommand extends Command {
  constructor(commandKey, destination, displayName, displayed) {
    super(commandKey, function () {
      mainPlayer.location = destination;
    });
    this.destination = destination;
    this.displayName = displayName;
  }
}

export class ItemCommand extends Command {
  constructor(commandKey, parentItem, displayName) {
    super(commandKey, function () {
      mainPlayer.selectedItem = parentItem;
      parentItem.uses();
    });
    this.parentItem = parentItem;
    this.displayName = displayName;
  }
}

export class Loot {
  constructor(item_id, enemy_id, quantity, drop_chance) {
    this.item_id = item_id;
    this.enemy_id = enemy_id;
    this.quantity = quantity;
    this.drop_chance = drop_chance;
  }
}
