"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var usernameValidator_1 = require('./validators/usernameValidator');
var passwordValidator_1 = require('./validators/passwordValidator');
var LoginComponent = (function () {
    function LoginComponent(builder) {
        this.builder = builder;
        this.username = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, usernameValidator_1.UsernameValidator.startsWithNumber]), usernameValidator_1.UsernameValidator.usernameTaken);
        this.password = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, passwordValidator_1.PasswordValidator.passwordComplexity]));
        this.form = builder.group({
            username: this.username,
            password: this.password
        });
    }
    LoginComponent.prototype.submitData = function () {
        console.log(JSON.stringify(this.form.value));
        alert("Name: " + this.form.value.username + " Email: " + this.form.value.password);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            providers: [router_1.ROUTER_PROVIDERS],
            templateUrl: 'app/components/templates/login.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        router_1.Routes([]), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map