import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: SigninScreenComponent
    },
    {
        path: 'signup',
        component: SignupScreenComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

export const Routing = RouterModule.forRoot(routes);
