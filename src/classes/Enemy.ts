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