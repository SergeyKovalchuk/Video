import { Control } from '@angular/common';

interface ValidationResult{
    [key:string]:boolean;
}

export class PasswordValidator {

    static passwordComplexity(control: Control): ValidationResult {
        if ( control.value !="" && control.value.length < 7 ){
            return {"passwordComplexity": true};
        }
        return null;
    }
}
