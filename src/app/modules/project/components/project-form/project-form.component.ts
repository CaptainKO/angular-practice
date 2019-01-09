import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { Project } from "@shared/model/project";

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  project: Project;
  comfirmed = false;
  types = ['bootstrap', 'angular', 'React'];
  constructor(private fb: FormBuilder) {

    this.project = new Project(
      'default',
      'Bootstrap',
      'https://via.placeholder.com/700x400',
      'dfafjadfkajsfkas;fa',
      ''
    )
   }

  ngOnInit() {
    this.projectForm = this.fb.group({
      title: ['Your Project', [Validators.required, Validators.minLength(3)]],
      type: ['', Validators.required],
      content: ['', [Validators.required, Validators.maxLength(10)]],

    })
  }
  createProject(object: any) {

  }
}
