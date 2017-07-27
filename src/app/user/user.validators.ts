import {Directive} from '@angular/core';
import {AbstractControl, FormControl, Validator, ValidatorFn} from '@angular/forms';


function validateJuriNameFactory(): ValidatorFn {
  return (c: AbstractControl) => {

    const isValid = c.value.length === 3;
    for (const char of c.value) {
      console.log(char);
    }
    if (isValid) {
      return null;
    } else {
      return {
        juriName: {
          valid: false
        }
      };
    }
  };
}

@Directive({
  selector: '[juriName][ngModel]'
})
export class UserFormValidatorDirective implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = validateJuriNameFactory();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }
}
