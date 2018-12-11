import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landingpage.component';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';
import { SelectCityComponent } from './components/select-city/select-city.component';
import { MovieContainerComponent } from './components/movie-container/movie-container.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RoutingModule, routingComponents } from './modules/routing/routing.module';
import { MovieComponent } from './components/movie/movie.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { TheatreShowsComponent } from './components/theatre-shows/theatre-shows.component';
import { ShowTimingBodyComponent } from './components/show-timing-body/show-timing-body.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from './custommaterialnav';


@NgModule({
  declarations: [
    LandingComponent,
    SelectCityComponent,
    MovieContainerComponent,
    MovieCardComponent,
    MovieComponent,
    TheatreComponent,
    TheatreShowsComponent,
    ShowTimingBodyComponent,
    HeaderComponent,

  ],
  imports: [
    CustomMaterialModule,
    HttpClientModule,
    RoutingModule,
    CommonModule,
    FormsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [LandingComponent,routingComponents]
})
export class LandingModule { }
