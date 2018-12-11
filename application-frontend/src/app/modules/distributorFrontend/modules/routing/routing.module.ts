import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { DistributorListComponent } from '../../components/distributor-list/distributor-list.component';
import { DistributorComponent } from '../../components/distributor/distributor.component';
import { CityComponent } from '../../components/city/city.component';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';
import { MovieComponent } from '../../components/movie/movie.component';
import { IndexComponent } from '../../components/index/index.component';
const routes:Routes=[
  {path:'',component:IndexComponent},
  {path:'distributors',component:DistributorListComponent},
  {path:'distributors/:mailId',component:DistributorComponent},
  {path:'distributors/:mailId/:cityName',component:CityComponent},
  {path:'distributors/:mailId/:cityName/addMovie',component:MovieFormComponent},
  {path:'distributors/:mailId/:cityName/:movieId',component:MovieComponent}
  
    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
export const routingComponents=[DistributorComponent,CityComponent,MovieComponent,DistributorListComponent,MovieFormComponent];