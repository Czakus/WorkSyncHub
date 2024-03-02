import { Routes } from '@angular/router';

export const routes: Routes = [
 {
  path: 'auth',
  loadComponent: () => import('./modules/auth/container/auth.component').then(component => component.AuthComponent)
 },

 {
  path: 'application',
  loadChildren: () => import('./modules/application/application.routing')

 },

 {
  path: '*',
  redirectTo: 'application'
 }
];
