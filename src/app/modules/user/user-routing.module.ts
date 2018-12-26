import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "@core/guards/auth.guard";

import { LoginComponent } from "./pages/login/login.component";
import { SigninComponent } from "./pages/signin/signin.component";
import { ProfileComponent } from "./pages/profile/profile.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
