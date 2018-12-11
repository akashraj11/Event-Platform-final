import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RsvpHomeComponent } from '../../components/rsvp-home/rsvp-home.component';
import { RsvpDetailsComponent } from '../../components/rsvp-details/rsvp-details.component';
import { RsvpFormComponent } from '../../components/rsvp-form/rsvp-form.component';

const routes:Routes=[
  {path:'',component:RsvpHomeComponent,
  children:[{path:':id',component:RsvpDetailsComponent}
  ]},
  {path:'rsvp/addNewRsvp',component:RsvpFormComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
export const routingComponents=[RsvpFormComponent,RsvpHomeComponent];