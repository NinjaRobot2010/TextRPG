export class Loot {
  constructor(item_id, enemy_id, quantity, drop_chance) {
    this.item_id = item_id;
    this.enemy_id = enemy_id;
    this.quantity = quantity;
    this.drop_chance = drop_chance;
  }
}