import { Component, OnInit, Input } from '@angular/core';
import { InfoCard } from "./info-card";

@Component({
  selector: 'info-card',
  template: `
    <div class="card h-100">
      <h4 class="card-header">{{infoCard.title}}</h4>
      <div class="card-body">
        <p class="card-text">{{infoCard.content}}</p>
      </div>
      <div class="card-footer">
        <a routerLink="/{{infoCard.moreUrl}}" class="btn btn-primary">Learn More</a>
      </div>
    </div>
  `,
  styles: ['']
})
export class InfoCardComponent implements OnInit {
  @Input() public infoCard: InfoCard;
  constructor() { }

  ngOnInit() {
  }

}
