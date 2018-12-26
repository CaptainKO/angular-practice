import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { AuthService } from '@services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Making request to ', req.url);
    let token = this.authService.getToken();
    if (token) {
      console.log('Making authorized request.');
      // req.headers.append("X-AUTH-HEADER", token);
      const authReq = req.clone({
        headers: req.headers.set('X-AUTH-HEADER', token)
      });
      req = authReq;
      console.log(req.headers);
    }
    return next.handle(req);
  }
}
