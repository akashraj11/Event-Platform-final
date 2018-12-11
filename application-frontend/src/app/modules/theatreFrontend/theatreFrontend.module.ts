import { NgModule } from '@angular/core';
import { TheatreFrontendComponent } from './theatreFrontend.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { BodyTheatreComponent } from './component/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { SeatComponent } from './component/seat/seat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TheatreRegistrationFormComponent } from './component/theatre-registration-form/theatre-registration-form.component';
import { CustomValidators } from './services/custom_validators';
import { FormService } from './services/form';
import { MaterialModule } from './material';
import { TheatreRoutingModule } from './theatreFrontend-routing.module';


@NgModule({
  declarations: [
    TheatreFrontendComponent,
    CardComponent,
    BodyTheatreComponent,
    SeatComponent,
    TheatreRegistrationFormComponent,
  ],
  imports: [
    TheatreRoutingModule, 
    FormsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ CustomValidators, FormService],
  bootstrap: [TheatreFrontendComponent]
})
export class TheatreFrontendModule { }
