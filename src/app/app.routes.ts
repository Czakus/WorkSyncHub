import { Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/guards/auth.guard';

export const routes: Routes = [

 {
  canMatch: [AuthGuard],
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
