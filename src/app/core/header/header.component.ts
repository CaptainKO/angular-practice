import { Component, OnInit } from '@angular/core';
import { UserService } from "@core/services/user.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  public toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }
}
