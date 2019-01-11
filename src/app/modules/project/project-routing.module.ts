import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProjectComponent } from "./pages/create-project/create-project.component";

const routes: Routes = [
  { path: '', redirectTo: 'create-project', pathMatch: 'full' },
  { path: 'create-project', component: CreateProjectComponent, data: { breadcrumb: 'Create New Project' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
