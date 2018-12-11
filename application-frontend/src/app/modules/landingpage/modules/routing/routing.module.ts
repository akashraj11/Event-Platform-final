import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SelectCityComponent } from '../../components/select-city/select-city.component';
import { MovieContainerComponent } from '../../components/movie-container/movie-container.component';
import { ShowTimingBodyComponent } from '../../components/show-timing-body/show-timing-body.component';
import { MovieComponent } from '../../components/movie/movie.component';
const routes:Routes=[
 {path:'',component:SelectCityComponent},
 {path:'show/:cityName',component:MovieContainerComponent},
 {path:'show/:cityName/:movieId',component:MovieComponent},
 {path:'show/:cityName/:movieId/theatres',component:ShowTimingBodyComponent}
    
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
export const routingComponents=[SelectCityComponent,MovieComponent,ShowTimingBodyComponent,MovieContainerComponent];