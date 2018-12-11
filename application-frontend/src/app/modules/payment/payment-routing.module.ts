import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';

const routes: Routes = [
  {path:'',component:CardComponent},
  {path:'success',component: SuccessComponent},
  {path:'fail',component: FailComponent},
  {path:'**',redirectTo:'/card',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentAppRoutingModule { }
export const RoutingComponent =[CardComponent,SuccessComponent,FailComponent]

