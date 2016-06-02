"use strict";
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.passwordComplexity = function (control) {
        if (control.value != "" && control.value.length < 7) {
            return { "passwordComplexity": true };
        }
        return null;
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
//# sourceMappingURL=passwordValidator.js.map