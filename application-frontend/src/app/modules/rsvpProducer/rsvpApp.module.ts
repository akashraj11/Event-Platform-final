import { NgModule } from '@angular/core';

import { RsvpAppComponent } from './rsvpApp.component';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { FormsModule }   from '@angular/forms';
import { RoutingModule, routingComponents } from './modules/routing/routing.module';
import { RsvpFormComponent } from './components/rsvp-form/rsvp-form.component';
import { RsvpHomeComponent } from './components/rsvp-home/rsvp-home.component';
import { RsvpDetailsComponent } from './components/rsvp-details/rsvp-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RsvpAppComponent,
    RsvpFormComponent,
    RsvpHomeComponent,
    RsvpDetailsComponent
  ],
  imports: [
    FormsModule,CustomMaterialModule,RoutingModule,HttpClientModule,CommonModule
  ],
  providers: [],
  bootstrap: [RsvpAppComponent]
})
export class RsvpAppModule { }
