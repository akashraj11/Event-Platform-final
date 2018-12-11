import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeatLayoutAppComponent } from './seatLayout.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { SeatLayoutComponent } from './component/seat/seat.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { SeatLayoutAppRoutingModule } from './seatLayout-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AlertsModule } from 'angular-alert-module';
import { MaterialModule } from '../rsvp/material';
import { CommonModule } from '@angular/common';
import { FlipModule } from 'ngx-flip';

@NgModule({
  declarations: [
    SeatLayoutAppComponent,
    SeatLayoutComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SeatLayoutAppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FlipModule,
    AlertsModule.forRoot()     
  ],
  providers: [DataService],
  bootstrap: [SeatLayoutAppComponent]
})

export class SeatLayoutAppModule { }
