import { Party } from "../classes/Party";
import { CharacterClass } from "../classes/CharacterClass";
import { WeaponBehavior } from "./weapon-behavior/WeaponBehavior";


export class Character {
  protected party?: Party;
  protected characterClass?: CharacterClass;
  protected weaponBehavior?: WeaponBehavior;

  constructor(
    public readonly name: string,
    protected health: number,
    protected maxHealth: number,
    protected energy: number,
    protected maxEnergy: number
  ) {
    this.party = undefined;
    this.characterClass = undefined;
    this.weaponBehavior = undefined;
  }

  setParty(party: Party): void {
    this.party = party;
  }

  setCharacterClass(characterClass: CharacterClass): void {
    this.characterClass = characterClass;
  }

  attackWithWeapon(): void {
    if (!this.weaponBehavior) {
      console.log(`${this.name} has no weapon to attack with.`);
      return;
    }
      this.weaponBehavior.useWeapon();
  }

  setWeaponBehavior(weaponBehavior: WeaponBehavior): void {
    this.weaponBehavior = weaponBehavior;
  }
}