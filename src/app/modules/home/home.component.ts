import { Component, OnInit } from '@angular/core';

import { InfoCard } from "../../shared/components/cards/info-card/info-card";
import { ProjectCard } from "../../shared/components/cards/project-card/project-card";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public images: any[] = [1, 2, 3];
  public infoCards: InfoCard[];
  public projectCards: ProjectCard[];
  constructor() { }

  ngOnInit() {
    this.loadSlides();
    this.loadInfoCards();
    this.loadProjectCard();
  }

  loadSlides() {
    this.images = this.images.map(x => x = 'http://via.placeholder.com/1900x1080');
  }

  loadInfoCards() {
    this.infoCards = [
      new InfoCard('lol', 'lrefafakf dffak j dfasdfkjadflka', '/home'),
      new InfoCard('lol', 'lrefafakf  sdfdsa fsdaf fsa dffak j dfasdfkjadflka', '/home'),
      new InfoCard('lol', 'lrefafakf dffak j dfasdfkjadflka', '/home')
    ]
  }

  loadProjectCard() {
    this.projectCards = [
      new ProjectCard('Project 1', 'http://via.placeholder.com/700x400', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!', '/home'),
      new ProjectCard('Project 2', 'http://via.placeholder.com/700x400', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!', '/home'),
      new ProjectCard('Project 3', 'http://via.placeholder.com/700x400', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!', '/home'),
      new ProjectCard('Project 4', 'http://via.placeholder.com/700x400', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!', '/home'),
      new ProjectCard('Project 5', 'http://via.placeholder.com/700x400', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!', '/home'),
      new ProjectCard('Project 6', 'http://via.placeholder.com/700x400', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!', '/home')
    ]
  }

}
