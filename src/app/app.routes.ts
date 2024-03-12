import { Routes } from '@angular/router';
import { AuthGuard } from './modules/application/guards/auth.guard';

export const routes: Routes = [

 {
  path: 'auth',
  loadComponent: () => import('./modules/auth/container/auth.component').then(component => component.AuthComponent)
 },

 {
  canMatch: [AuthGuard],
  path: 'application',
  loadChildren: () => import('./modules/application/application.routing')
 },

 {
  path: '',
  redirectTo: 'auth',
  pathMatch: 'full'
 },

 {
  path: '*',
  redirectTo: 'application'
 }
];
