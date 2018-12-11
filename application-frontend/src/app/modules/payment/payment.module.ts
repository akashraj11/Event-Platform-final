import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PaymentAppRoutingModule } from './payment-routing.module';
import { RoutingComponent } from './payment-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatIconModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { PaymentService } from './payment.service';
import { AlertsModule } from 'angular-alert-module';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { PaymentAppComponent } from './payment.component';
@NgModule({
  declarations: [
    PaymentAppComponent,
    RoutingComponent
  ],
  imports: [
  MatIconModule,
  PaymentAppRoutingModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatButtonToggleModule,
  HttpClientModule,
  AlertsModule.forRoot(),
  ],
  providers: [PaymentService],
  bootstrap: [PaymentAppComponent]
})
export class PaymentAppModule { }
