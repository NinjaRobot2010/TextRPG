import { WeaponBehavior } from "./WeaponBehavior";

export class AxeBehavior implements WeaponBehavior {
   useWeapon(): void {
      console.log("The character swings an axe!");
   }
}