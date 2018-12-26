import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { NgbDropdownModule, NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';


import { UserService } from "./core/services/user.service";
import { AuthGuard } from "@core/guards/auth.guard";
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbCollapseModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService,
    AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
