"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
// import * as materialLite from 'material-design-lite';
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS])
    .then(function () {
    // materialLite.componentHandler.upgradeAllRegistered();
})
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map