import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes : Hero[] = [
      {
        id: 11,
        name: 'Poison July',
        slug: 'poison-july',
        superpower: 'Poison',
        weakness: "Fire",
        age: 20,
        ennemy: "Batman"
      },
      {
        id: 98,
        age: 30,
        ennemy: "Joker",
        name: "Batman",
        slug: "batman",
        superpower: "Richesse",
        weakness: "Humain"
      },
      {
        id: 16,
        age: 19,
        ennemy: "???",
        name: 'Jolyne Kujo',
        slug: 'jolyne-kujo',
        superpower: 'Stand Stone Free',
        weakness: "???"
      },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
