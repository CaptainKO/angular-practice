import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _token: string = null;

  constructor() {
    this._token = localStorage.getItem('token') || null;
  }

  set token(token: string) {
    this._token = token;
    localStorage.setItem('token', this._token);
  }

  get token() {
    return this._token;
  }

  isLogged() {
    return Boolean(this._token);
  }

  deleteToken() {
    this._token = null;
    localStorage.removeItem('token');
  }
}
