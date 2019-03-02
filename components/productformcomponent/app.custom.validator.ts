import { AbstractControl } from "@angular/forms";
export class OddNotAllowedValidator {
  static checkOddEven(ctrl: AbstractControl): any {
    if (parseInt(ctrl.value) % 2 === 0) {
      return null;
    } else {
      return { invalid: true };
    }
  }
}
