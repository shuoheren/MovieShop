import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { MoviesComponent } from './movies.component';
import { MoviesCardListComponent } from './movies-card-list/movies-card-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MovieDetailsComponent,
    CastDetailsComponent,
    MoviesComponent,
    MoviesCardListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
