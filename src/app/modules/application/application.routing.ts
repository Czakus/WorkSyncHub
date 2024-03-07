import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./container/application.component').then(c => c.AppComponent)
  }
]

export default routes;
