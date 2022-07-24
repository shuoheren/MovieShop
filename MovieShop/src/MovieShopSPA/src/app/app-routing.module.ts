import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  {
    path: "account",
    loadChildren: () => import("./account/account.module").then(mod => mod.AccountModule)
  },
  {
    path: "movies",
    loadChildren: () => import("./movies/movies.module").then(mod => mod.MoviesModule)
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(mod => mod.UserModule), canLoad: [AuthGuard]
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(mod => mod.AdminModule), canLoad: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
