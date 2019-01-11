import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { PreloadAllModules } from "@angular/router";
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: '@modules/home/home.module#HomeModule', data: {breadcrumb:'Home'} },
  { path: 'user', loadChildren: '@modules/user/user.module#UserModule', data: {breadcrumb: 'User'} },
  { path: 'project', loadChildren: '@modules/project/project.module#ProjectModule', data: {breadcrumb: 'Project'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
