import { NgModule } from '@angular/core';
import { DistributorAppComponent } from './distributorApp.component';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { DistributorComponent } from './components/distributor/distributor.component';
import { CityComponent } from './components/city/city.component';
import { MovieComponent } from './components/movie/movie.component';
import { RoutingModule, routingComponents } from './modules/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './components/index/index.component';
import { DistributorListComponent } from './components/distributor-list/distributor-list.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '../theatreFrontend/material';


@NgModule({
  declarations: [
    DistributorAppComponent,
    DistributorComponent,
    CityComponent,
    MovieComponent,
    IndexComponent,
    DistributorListComponent,
    MovieFormComponent,
    MovieCardComponent
  ],
  imports: [
   CustomMaterialModule,RoutingModule,HttpClientModule,CommonModule,FormsModule,MaterialModule
  ],
  providers: [],
  bootstrap: [DistributorAppComponent,routingComponents]

})
export class DistributorAppModule { }
