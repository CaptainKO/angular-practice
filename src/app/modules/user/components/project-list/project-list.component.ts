import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Project } from '@shared/model/project';
import { ProjectService } from '@services/project.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  @Output() public onload = new EventEmitter<boolean>();
  projects: Observable<Project[]>;
  constructor(
    private projectService: ProjectService
  ) {
    this.projects = this.projectService.getProjects();
    this.projects.subscribe(x => console.log(x));
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.onload.emit(false)

  }
}
