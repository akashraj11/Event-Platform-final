import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TheatreFrontendModule } from './theatreFrontend/theatreFrontend.module';
import { UserregistrationModule } from './user-registration/user-registration.module';
import { LoginauthenticationModule } from './loginauthentication/loginauthentication.module';
import { MainLandingModule } from '../main-landing-page/main-landing-page.module';
import { DistributorAppModule } from './distributorFrontend/distributorApp.module';
import { ShowuiModule } from './showui/showui.module';
import { LandingModule } from './landingpage/landingpage.module';
import { ProfileModule } from './profile/profile.module';
import { RsvpModule } from './rsvp/rsvp.module';
import { RsvpAppModule } from './rsvpProducer/rsvpApp.module';
import { SeatLayoutAppModule } from './seatLayout/seatLayout.module';
import { HomeComponent } from '../components/home/home.component';
import { CardComponent } from './theatreFrontend/component/card/card.component';
import { PaymentAppModule } from './payment/payment.module';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'theatre',
    loadChildren: () => TheatreFrontendModule,
  },
  {
    path: 'rsvpresponse',
    loadChildren: () => RsvpModule,
  },
  {
    path: 'booking/:id',
    loadChildren: () => SeatLayoutAppModule,
  },
  {
    path: 'card',
    loadChildren: () => PaymentAppModule,
  },
  {
    path: 'rsvpEvent',
    loadChildren: () => RsvpAppModule,
  },
  {
    path: 'profile',
    loadChildren: () => ProfileModule,
  },
  {
    path: 'landing',
    loadChildren: () => LandingModule,
  },
  {
    path: 'userregistration',
    loadChildren: () => UserregistrationModule,
  },
  {
    path: 'distributors',
    loadChildren: () => DistributorAppModule,
  }, 
  {
    path: 'mainlanding',
    loadChildren: () => MainLandingModule,
  },
  {
    path: 'login',
    loadChildren: () => LoginauthenticationModule,
  },
  {
    path: 'show',
    loadChildren: () => ShowuiModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
