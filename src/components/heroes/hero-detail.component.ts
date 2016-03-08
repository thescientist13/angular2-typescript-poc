import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { Hero } from './hero.interface';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: 'src/components/heroes/hero-detail.component.html',
  styleUrls: ['src/components/heroes/hero-detail.component.css'],
  inputs: ['hero']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(private heroService: HeroService, private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }
}