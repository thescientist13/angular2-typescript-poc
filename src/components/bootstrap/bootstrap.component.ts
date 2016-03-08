import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { HeroService } from '../../components/heroes/hero.service';
import { HeroesComponent } from '../../components/heroes/heroes-list.component';
import { HeroDetailComponent } from '../../components/heroes/hero-detail.component';

@Component({
  selector: 'bootstrap',
  templateUrl: 'src/components/bootstrap/bootstrap.component.html',
  styleUrls: ['src/components/bootstrap/bootstrap.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService]
})

@RouteConfig([{
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }, {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }, {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

export class BootstrapComponent {
  private title = 'Tour of Heroes';
}