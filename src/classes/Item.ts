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