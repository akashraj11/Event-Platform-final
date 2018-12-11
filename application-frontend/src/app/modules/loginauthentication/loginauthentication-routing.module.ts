import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'**',
        component:FormComponent
      }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAuthenticationRoutingModule { }
