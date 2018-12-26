import { Component, OnInit, Input } from '@angular/core';
import { Project } from "@shared/model/project";


@Component({
  selector: 'project-card',
  template: `
  <div class="card h-100">
   <a href="#"><img class="card-img-top" [src]="projectCard.imgUrl" alt=""></a>
    <div class="card-body">
     <h4 class="card-title">
        <a href="#">{{projectCard.title}}</a>
      </h4>
      <p class="card-text">{{projectCard.content}}</p>
    </div>
  </div>
  `,
  styles: ['']
})
export class ProjectCardComponent implements OnInit {
  @Input() public projectCard: Project;
  constructor() { }

  ngOnInit() {
  }

}
