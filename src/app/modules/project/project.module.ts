import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ProjectRoutingModule } from './project-routing.module';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
