import { Component, OnInit } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

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
  constructor() { }

  ngOnInit() {
  }

}
