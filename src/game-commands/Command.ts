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