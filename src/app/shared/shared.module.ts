import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { ProjectCardComponent } from './components/cards/project-card/project-card.component';
import { InfoCardComponent } from './components/cards/info-card/info-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InfoCardComponent
  ]
})
export class InfoCardModule {}
@NgModule({
  declarations: [
    ProjectCardComponent,
    LoadingComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,  // reusing purpose
    RouterModule,   //  for Routing
    InfoCardModule
  ],
  exports: [
    InfoCardComponent,
    ProjectCardComponent,
    LoadingComponent,
    BreadcrumbComponent,
    InfoCardModule,
  ]
})
export class SharedModule { }
