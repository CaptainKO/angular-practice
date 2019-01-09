import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectCardComponent } from './components/cards/project-card/project-card.component';
import { InfoCardComponent } from './components/cards/info-card/info-card.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    InfoCardComponent,
    ProjectCardComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,  // reusing purpose
    RouterModule    //  for Routing
  ],
  exports: [
    InfoCardComponent,
    ProjectCardComponent,
    LoadingComponent
    // CommonModule, // the Unknown
    // RouterModule, // the Unknown

  ]
})
export class SharedModule { }
