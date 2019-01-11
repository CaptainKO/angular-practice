import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "@core/guards/auth.guard";

import { LoginComponent } from "./pages/login/login.component";
import { SigninComponent } from "./pages/signin/signin.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SharedModule } from '@shared/shared.module';


const routerConfig: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, data: {breadcrumb: 'Login'} },
  { path: 'signin', component: SigninComponent,  data: {breadcrumb: 'Signin'} },
  {
    path: 'profile', children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProfileComponent,
        data: {
          breadcrumb: 'Profile'
        }
      }
    ], canActivate: [AuthGuard],data : {breadcrumb: 'Profile'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig), SharedModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
