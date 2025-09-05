import { Routes } from '@angular/router';
import { Home } from './pages/home/home'
import { Auth } from './auth/auth';

export const routes: Routes = [
    { path: '', component: Home, },
    { path: 'signin', component: Auth }
];
