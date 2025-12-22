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