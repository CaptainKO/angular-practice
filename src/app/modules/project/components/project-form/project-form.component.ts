import { Component, OnInit } from '@angular/core';
import { Project } from "@shared/model/project";

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  public project: Project;
  public comfirmed = false;
  public types = ['bootstrap', 'angular', 'React'];
  constructor() {
    this.project = new Project(
      'default',
      'Bootstrap',
      'https://via.placeholder.com/700x400',
      'dfafjadfkajsfkas;fa',
      ''
    )
   }

  ngOnInit() {
  }
  createProject(object: any) {

  }
}
