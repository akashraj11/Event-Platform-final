import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { UserregistrationRoutingModule } from './user-registration-routing.module';
import { UserregistrationComponent } from './user-registration.component';
import { routingComponent } from './user-registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '../theatreFrontend/material';
import { CommonModule } from '@angular/common';
import { AlertsModule } from 'angular-alert-module';


@NgModule({
  declarations: [
    UserregistrationComponent,
    routingComponent
  ],
  imports: [
    UserregistrationRoutingModule,
    MaterialModule,
    MatStepperModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FlexLayoutModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AlertsModule.forRoot()
  ],
  providers: [RegistrationService],
  bootstrap: [UserregistrationComponent]
})
export class UserregistrationModule { }
