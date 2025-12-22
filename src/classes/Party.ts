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