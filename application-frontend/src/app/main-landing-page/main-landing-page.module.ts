import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainLandingComponent } from './main-landing-page.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MainLandingPageRoutingModule } from './main-landing-page-routing.module';

@NgModule({
  declarations: [
    MainLandingComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    MainLandingPageRoutingModule,
  ],
  providers: [],
  bootstrap: [MainLandingComponent]
})
export class MainLandingModule { }
