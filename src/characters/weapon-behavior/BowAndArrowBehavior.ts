import { WeaponBehavior } from "./WeaponBehavior";

export class BowAndArrowBehavior implements WeaponBehavior {
   useWeapon(): void {
      console.log("The character shoots an arrow with a bow!");
   }
}