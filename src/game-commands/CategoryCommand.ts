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