import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataService } from './services/data.service';
import { AlertsModule } from 'angular-alert-module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { TheatreFrontendModule } from './modules/theatreFrontend/theatreFrontend.module';
import { UserregistrationModule } from './modules/user-registration/user-registration.module';
import { FooterComponent } from './main-landing-page/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMainComponent,
    ConfirmDialogComponent,
    AboutComponent,
    HeroComponent,
    FooterComponent,
    MainFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TheatreFrontendModule,
    UserregistrationModule,
    MatDialogModule,
    MatButtonModule,
    AlertsModule.forRoot(),
  ],
  providers: [CoreDataService,SharedModule],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent]
})
export class AppModule { }
