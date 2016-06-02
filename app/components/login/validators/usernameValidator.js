"use strict";
var UsernameValidator = (function () {
    function UsernameValidator() {
    }
    UsernameValidator.startsWithNumber = function (control) {
        if (control.value != "" && !isNaN(control.value.charAt(0))) {
            return { "startsWithNumber": true };
        }
        return null;
    };
    UsernameValidator.usernameTaken = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === "Sergey") {
                    resolve({ "usernameTaken": true });
                }
                else {
                    resolve(null);
                }
                ;
            }, 100);
        });
    };
    return UsernameValidator;
}());
exports.UsernameValidator = UsernameValidator;
//# sourceMappingURL=usernameValidator.js.map