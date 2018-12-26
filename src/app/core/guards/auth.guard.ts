import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserStoreService } from "@core/services/user-store.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userStoreSerices: UserStoreService,
    private router: Router
  ) { }
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('Auth is activated');
    if (this.userStoreSerices.isLogged()) {
      return true;
    }
    this.router.navigate(['user', 'login']);
    return false;
  }
}
