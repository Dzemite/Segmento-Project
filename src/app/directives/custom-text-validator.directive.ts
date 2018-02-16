import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[customText][formControlName],[customText][formControl],[customText][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomTextValidatorDirective, multi: true}]
})
export class CustomTextValidatorDirective implements Validator {
  @Input('customText')
  regStr: string;

  validate(c: FormControl): {[key: string]: any} {
    let v = c.value;
    let constraint = new RegExp(this.regStr, "");

    return !constraint.test(v) ? {"customText": true} : null;
  }
}
