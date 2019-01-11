import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
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
      content: [this.types[0], [Validators.required, Validators.maxLength(10)]],
      imgUrl: ['https://via.placeholder.com/700x400.jpg', [Validators.required, Validators.pattern(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/)]],
      projectUrl: ['https://www.google.com', [Validators.required]]
    })
  }

  get title() {
    return this.projectForm.get('title');
  }

  get type() {
    return this.projectForm.get('type');
  }

  get content() {
    return this.projectForm.get('content');
  }

  get imgUrl() {
    return this.projectForm.get('imgUrl');
  }

  get projectUrl() {
    return this.projectForm.get('projectUrl');
  }


  createProject(o: any) {
    console.log(o);
  }
}
