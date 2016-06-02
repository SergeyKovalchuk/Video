import { bootstrap }        from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';

import { AppComponent }     from './app.component';

// import * as materialLite from 'material-design-lite';

bootstrap(AppComponent, [ROUTER_PROVIDERS])
        .then(() => {
            // materialLite.componentHandler.upgradeAllRegistered();
        })
        .catch(err => console.error(err));
