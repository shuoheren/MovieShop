import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [

    CreateMovieComponent,
    PurchasesComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
