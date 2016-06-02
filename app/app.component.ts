import { provide, Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { RegistrationComponent} from './components/registration/registration';
import { HomeComponent} from './components/home/home';
import { LoginComponent} from './components/login/login';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    templateUrl: 'app/components/templates/app.component.html'
})

@Routes([
        { path: '/', component: HomeComponent},
        { path: '/registration', component: RegistrationComponent},
        { path: '/login', component: LoginComponent }
])

export class AppComponent {
}
