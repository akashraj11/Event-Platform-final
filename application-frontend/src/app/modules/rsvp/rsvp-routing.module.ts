import { Routes, RouterModule } from '@angular/router';
import { InvitationResponseComponent } from './invitation-response/invitation-response.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: 'rsvp/invitation/:email/:id',
      component: InvitationResponseComponent
    }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RsvpRoutingModule {}
  export const routingComponents = [ ];
