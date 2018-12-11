import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { RootShowComponent } from './rootshow/rootshow.component';

const routes: Routes = [
  {path:'',component:RootShowComponent,children:[
  {path:'add',component:AddComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent}]}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowuiRoutingModule { }
export const routingComponent =[AddComponent,UpdateComponent,DeleteComponent,RootShowComponent]

