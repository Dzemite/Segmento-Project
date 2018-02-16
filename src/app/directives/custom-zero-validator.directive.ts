import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[customZero][formControlName],[customZero][formControl],[customZero][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomZeroValidatorDirective, multi: true}]
})
export class CustomZeroValidatorDirective implements Validator {

  validate(c: FormControl): {[key: string]: any} {
    let v = c.value;
    return ( v === 0)? {"customZero": true} : null;
  }

}
