import { NgModule } from '@angular/core';
import { RsvpComponent } from './rsvp.component';
import { InvitationResponseComponent } from './invitation-response/invitation-response.component';
import { MaterialModule } from './material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { routingComponents, RsvpRoutingModule } from './rsvp-routing.module';

@NgModule({
  declarations: [
    RsvpComponent,
    InvitationResponseComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientJsonpModule,
    RouterModule,
    RsvpRoutingModule
    ],
  providers: [],
  bootstrap: [RsvpComponent, routingComponents]
})
export class RsvpModule { }
