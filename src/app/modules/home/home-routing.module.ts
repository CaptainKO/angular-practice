import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { SharedModule } from '@shared/shared.module';

const routerConfig: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } }
];

@NgModule({
  imports: [RouterModule.forChild(routerConfig), SharedModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
