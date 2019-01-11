import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { SharedModule } from '@shared/shared.module';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';


@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    ProfileComponent,
    ProfileFormComponent,
    ProjectListComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTabsetModule,
    UserRoutingModule
  ]
})
export class UserModule { }
