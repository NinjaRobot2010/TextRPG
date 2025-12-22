import { WeaponBehavior } from "./WeaponBehavior";

export class SwordBehavior implements WeaponBehavior {
   useWeapon(): void {
      console.log("The character slashes with a sword!");
   }
}