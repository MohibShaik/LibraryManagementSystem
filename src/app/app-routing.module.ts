import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module').then((mod) => mod.AuthenticationModule),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule),
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
