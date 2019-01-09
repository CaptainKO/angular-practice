import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment as env } from '@app/../environments/environment';

import { Observable } from "rxjs/Observable";
import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private UserStoreService: UserStoreService
              ) { }

  register(username: string, password: string): Observable<any> {
    return this.http.post(env.apiUrl + 'user/register', {
      username: username,
      password: password
    });
  }

  login(username: string, password: string):Observable<any> {
    return this.http.post(env.apiUrl + 'user/login', {
      username: username,
      password: password
    });
  }

  logout() {
    this.UserStoreService.deleteToken();
  }

  isLoggedIn() {
    return this.UserStoreService.isLogged();
  }
}
