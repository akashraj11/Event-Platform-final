import { NgModule } from '@angular/core';
import { LoginauthenticationComponent } from './loginauthentication.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModelComponent } from './model/model.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationserviceService } from './services/authenticationservice.service';
import { LoginAuthenticationRoutingModule } from './loginauthentication-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginauthenticationComponent,
    FormComponent,
    DashboardComponent,
    ModelComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LoginAuthenticationRoutingModule,
  ],
  providers: [AuthenticationserviceService],
  bootstrap: [LoginauthenticationComponent]
})
export class LoginauthenticationModule { }
