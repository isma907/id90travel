import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module'
import { AuthModule } from './auth/auth.module'

const routes: Routes = [
  { path: "", loadChildren: "./public/public.module#PublicModule" },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
