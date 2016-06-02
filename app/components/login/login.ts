import { provide, Component }       from '@angular/core';
import { RegistrationComponent }    from '../registration/registration';
import { Routes,
         ROUTER_DIRECTIVES,
         ROUTER_PROVIDERS }         from '@angular/router';
import {
    	 FormBuilder,
    	 Validators,
    	 Control,
    	 ControlGroup,
    	 FORM_DIRECTIVES }          from '@angular/common';
import { User }                     from '../user/user';
import { UsernameValidator }        from './validators/usernameValidator'
import { PasswordValidator }        from './validators/passwordValidator';

@Component({
    selector: 'login',
    providers: [ROUTER_PROVIDERS],
    templateUrl: 'app/components/templates/login.component.html',
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})

@Routes([
        // { path: '/registration', component: RegistrationComponent},
])

export class LoginComponent {
    form: ControlGroup;

   	username: Control;
   	password: Control;

    constructor (private builder: FormBuilder) {

		this.username = new Control(
			"",
			Validators.compose([Validators.required, UsernameValidator.startsWithNumber]),
			UsernameValidator.usernameTaken
		);

        this.password = new Control(
			"",
			Validators.compose([Validators.required, PasswordValidator.passwordComplexity])
		);

		this.form = builder.group({
			username: this.username,
            password: this.password
		});
	}

	submitData(){
     	console.log(JSON.stringify(this.form.value))
        alert(`Name: ${this.form.value.username} Email: ${this.form.value.password}`);

    }
}
