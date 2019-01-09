import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

// import { Project } from "@shared/model/project";
import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(title: string = ''): Observable<any[]> {
    console.log(env.apiUrl +'user/projects/list' + title);
    return this.http.get<any[]>(env.apiUrl + 'user/projects/list' + title);
  }


}
