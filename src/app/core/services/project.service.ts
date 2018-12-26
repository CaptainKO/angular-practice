import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { Project } from "@shared/model/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(title: string = ''): Observable<Project[]> {
    return this.http.get<Project[]>('api/project' + title);
  }
}
