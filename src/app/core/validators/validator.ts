import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl<number>): ValidationErrors | null => {
        if (control.value.toString().length === 10) {
            return { phoneNumberLength: { value: control.value } }
        } else if (isNaN(Number(control.value))) {
            return { phoneNumberType: { value: control.value } }
        }
        else {
            return null;
        }
    };
}

export function pincodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value.toString().length === 6) {
            return { pincodeLength: { value: control.value } }
        } else if (isNaN(Number(control.value))) {
            return { pincodeType: { value: control.value } }
        }
        else {
            return null;
        }
    }
}

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl<string>): ValidationErrors | null => {
        const regex = /^[a-zA-Z0-9]+$/;
        return control.value.match(regex) ? null : { invalidPassword: control.value }
    }
}

/** An actor's name can't match the actor's role */
export function confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');
        return password?.value !== confirmPassword?.value ? { invalidConfirmPassword: true } : null;
    };
} 