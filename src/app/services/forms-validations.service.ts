import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationService {

  // get all values of the formGroup, loop over them
  // then mark each field as touched
  public markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      (control instanceof FormGroup )
        ? this.markFormGroupTouched(control)
        : control.markAsTouched();
    });
  }

  // return list of error messages
  public validationMessages() {
    const messages = {
      required: 'Campo Requerido',
      email: 'Email invalido',
    };

    return messages;
  }

  // Validate form instance
  // check_dirty true will only emit errors if the field is touched
  // check_dirty false will check all fields independent of
  // being touched or not. Use this as the last check before submitting
  public validateForm(formToValidate: FormGroup, formErrors: any, checkDirty?: boolean) {
    const form = formToValidate;

    for (const field in formErrors) {
      if (field) {
        
        formErrors[field] = '';

        const control = form.get(field);
        const messages = this.validationMessages();

        if (control && control.invalid) {
          if (!checkDirty || (control.dirty || control.touched)) {
            for (const key in control.errors) {
              if (key) {
                formErrors[field] = formErrors[field] || messages[key];
              }
            }
          }
        }
      }
    }

    return formErrors;
  }
}
