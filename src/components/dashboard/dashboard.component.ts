import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../heroes/hero.interface';
import { HeroService } from '../heroes/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'src/components/dashboard/dashboard.component.html',
  styleUrls: ['src/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private router: Router, private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes.slice(1,5)
    );
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this.router.navigate(link);
  }
}