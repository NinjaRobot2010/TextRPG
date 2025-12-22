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