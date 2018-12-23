import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';

import { InfoCardComponent } from '../../shared/components/cards/info-card/info-card.component';
import { ProjectCardComponent } from "../../shared/components/cards/project-card/project-card.component";


@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    InfoCardComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule
  ]
})
export class HomeModule { }
