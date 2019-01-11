import { Component, OnInit } from '@angular/core';
import { UserService } from "@core/services/user.service";
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  addClass = {}
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.addClass =
      {
        "sidebar-active": !this.isCollapsed,
        "sidebar-disactive": this.isCollapsed
      }

  }
  constructor(private userService: UserService,
              router: Router) {
    // close sidebar when browser changes route
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.isCollapsed = true;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }
}
