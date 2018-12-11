import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheatreRegistrationFormComponent } from './component/theatre-registration-form/theatre-registration-form.component';
import { BodyTheatreComponent } from './component/body/body.component';

const routes: Routes = [
  {
    path: '',
    component: BodyTheatreComponent,
  },
  {
    path: 'registrationform',
    component: TheatreRegistrationFormComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TheatreRoutingModule { }
