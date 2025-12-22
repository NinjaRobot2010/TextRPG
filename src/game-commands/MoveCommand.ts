export class MoveCommand extends Command {
  constructor(commandKey, destination, displayName, displayed) {
    super(commandKey, function () {
      mainPlayer.location = destination;
    });
    this.destination = destination;
    this.displayName = displayName;
  }
}