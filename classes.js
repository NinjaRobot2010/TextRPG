export class User {
  #username;
  #password;

  constructor(username, password) {
    this.#username = username;
    this.#password = password;
  }

  verifyPassword(value) {
    return value === this.#password;
  }

  set username(value) {
    if (typeof value === "string") {
      this.#username = value;
    } else {
      throw new Error("value is not a string");
    }
  }

  set password(value) {
    if (typeof value === "string") {
      this.#password = value;
    } else {
      throw new Error("value is not a string");
    }
  }
}

export class Character {
  #partyId;
  #classId;
  #name;
  #health;
  #maxHealth;
  #energy;
  #maxEnergy;

  constructor(partyId, classId, name, health, maxHealth, energy, maxEnergy) {
    this.#partyId = partyId;
    this.#classId = classId;
    this.#name = name;
    this.#health = health;
    this.#maxHealth = maxHealth;
    this.#energy = energy;
    this.#maxEnergy = maxEnergy;
  }

  get partyId() {
    return this.#partyId;
  }

  get classId() {
    return this.#classId;
  }

  get name() {
    return this.#name;
  }

  get health() {
    return this.#health;
  }

  get maxHealth() {
    return this.#maxHealth;
  }

  get energy() {
    return this.#energy;
  }

  get maxEnergy() {
    return this.#maxEnergy;
  }

  set name(value) {
    if (typeof value === "string") {
      this.#name = value;
    } else {
      throw new Error("value is not a string");
    }
  }

  set health(value) {
    if (typeof value === "number") {
      this.#health = value;
    } else {
      throw new Error("value is not an number");
    }
  }

  set maxHealth(value) {
    if (typeof value === "number") {
      this.#maxHealth = value;
    } else {
      throw new Error("value is not an number");
    }
  }

  set energy(value) {
    if (typeof value === "number") {
      this.#energy = value;
    } else {
      throw new Error("value is not a number");
    }
  }
  set maxEnergy(value) {
    if (typeof value === "number") {
      this.#maxEnergy = value;
    } else {
      throw new Error("value is not a number");
    }
  }
}

export class Party {
  #username;
  #location;
  #level;
  #xp;

  constructor(username, location, level, xp) {
    this.username = username;
    this.location = location;
    this.level = level;
    this.xp = xp;
  }

  get username() {
    return this.#username;
  }

  get location() {
    return this.#location;
  }

  get level() {
    return this.#level;
  }

  get xp() {
    return this.#xp;
  }

  set username(value) {
    if (value instanceof username) {
      this.#username = value;
    } else {
      throw Error("value is not an instance of username");
    }
  }

  set location(value) {
    if (value instanceof location) {
      this.#location = value;
    } else {
      throw Error("value is not an instance of location");
    }
  }

  set level(value) {
    if (typeof value === "number") {
      this.#level = value;
    } else {
      throw Error("value is not an instance of username");
    }
  }

  set xp(value) {
    if (typeof value === "number") {
      this.#xp = value;
    } else {
      throw Error("value is not a number");
    }
  }
}

export class Item {
  #name;
  #uses;
  #description;
  #cost;
  #value;
  #multiplier;

  constructor(name, uses, description, cost, value, multiplier) {
    this.name = name;
    this.uses = uses;
    this.description = description;
    this.cost = cost;
    this.value = value;
    this.multiplier = multiplier;
  }

  get name() {
    return this.#name;
  }

  get uses() {
    return this.#uses;
  }

  get description() {
    return this.#description;
  }

  get cost() {
    return this.#cost;
  }

  get value() {
    return this.#value;
  }

  get multiplier() {
    return this.multiplier;
  }

  set name(value) {
    if (typeof value === "string") {
      this.#name = value;
    } else {
      throw Error("value is not a string");
    }
  }

  set uses(value) {
    if (typeof value === "function") {
      this.#uses = value;
    } else {
      throw Error("value is not a function");
    }
  }

  set description(value) {
    if (typeof value === "string") {
      this.#description = value;
    } else {
      throw Error("value is not a string");
    }
  }

  set cost(value) {
    if (typeof value === "number") {
      this.#cost = value;
    } else {
      throw Error("value is not a number");
    }
  }

  set value(value) {
    if (typeof value === "number") {
      this.#value = value;
    } else {
      throw Error("value is not a number");
    }
  }

  set multiplier(value) {
    if (typeof value === "number") {
      this.#multiplier = value;
    } else {
      throw Error("value is not a number");
    }
  }

  executeUse(i) {
    this.uses[i].action();
  }
}

export class Location {
  #name;
  #description;
  #connections;

  constructor(name, description, connections = []) {
    this.name = name;
    this.description = description;
    this.connections = connections;
  }

  set name(value) {
    if (typeof value === "string") {
      this.#name = value;
    } else {
      throw Error("value is not a string");
    }
  }

  set description(value) {
    if (typeof value === "string") {
      this.#description = value;
    } else {
      throw Error("value is not a string");
    }
  }

  set connection(value) {
    if (value[i] instanceof location) {
      this.#connections.push(value[i]);
    } else {
      throw Error("value is not an instance of location");
    }
  }

  addConnections(value) {
    for (let i = 0; i < value.length; i++) {
      this.connections.push(value[i]);
    }
  }
}

export class NPC {
  #name;
  #location_id;
  #item_ids;
  #event_id;
  #dialogue;

  constructor(name, location_id, item_ids, event_id, dialogue) {
    this.name = name;
    this.location_id = location_id;
    this.item_ids = item_ids;
    this.event_id = event_id;
    this.dialogue = dialogue;
  }

  get name() {
    return this.#name;
  }

  get location_id() {
    return this.#location_id;
  }

  get item_ids() {
    return this.#item_ids;
  }

  get event_id() {
    return this.#event_id;
  }

  get dialogue() {
    return this.#dialogue;
  }

  set name(value) {
    if (typeof value === "string") {
      this.#name = value;
    } else {
      throw Error("Value is not a string");
    }
  }

  set name(value) {
    if (typeof value === "string") {
      this.#name = value;
    } else {
      throw Error("Value is not a string");
    }
  }
}

export class Enemy {
  #name;
  #health;
  #max_health;
  #energy;
  #max_energy;

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
  constructor(commandKey, commandFunction) {
    this.commandKey = commandKey;
    this.commandFunction = commandFunction;
  }
  executeCommand() {
    this.commandFunction();
  }
}

export class MoveCommand extends Command {
  constructor(commandKey, destination) {
    super(commandKey, function () {
      mainPlayer.location = destination;
      UpdateGame();
    });
    this.destination = destination;
  }
}

export class ItemCommand extends Command {
  constructor(commandKey, parentItem) {
    super(commandKey, function () {
      mainPlayer.selectedItem = parentItem;
      parentItem.uses();
      UpdateGame();
    });
    this.parentItem = parentItem;
  }
}

export class InventoryCommand extends Command {
  constructor(commandKey) {
    super(commandKey, function () {
      displayConnections = false;
      displayInventoryCommand = false;
      displayInventory = true;
      UpdateGame();
    });
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
