import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {
  @Input() public images: string[];;
  constructor() { }

  ngOnInit() { 
  }

}
