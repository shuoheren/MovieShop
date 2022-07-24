import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesCardListComponent } from './movies-card-list/movies-card-list.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '', component: MoviesComponent,
    children: [
      { path: ':id', component: MovieDetailsComponent },
      { path: 'cast/:id', component: MovieDetailsComponent },
      { path: 'genres/:id', component: MoviesCardListComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
