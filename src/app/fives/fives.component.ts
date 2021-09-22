import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './fives.component.html',
  styleUrls: [ './fives.component.css' ]
})
export class FivesComponent implements OnInit {
  id: number = 55555;
  hero: Hero | undefined;
  superpower: string = "Sharp shooter";
  age: number = 22;
  weakness: string = "order 66";
  ennemy: string = "droids"

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.heroService.getHero(this.id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  /*save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }*/
}
