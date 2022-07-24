import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AdminComponent } from './admin.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate: [AdminGuard],
    children: [
      { path: 'createmovie', component: CreateMovieComponent },
      { path: 'reports/topmovies', component: PurchasesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
