import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { SeatLayoutComponent } from './component/seat/seat.component';
const routes: Routes = [
  {
    path: '',
    component: SeatLayoutComponent
  },
  {
    path: 'checkoutpage/checkout',
    component: CheckoutComponent,
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class SeatLayoutAppRoutingModule { }
