import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        id: 11,
        name: 'Poison July',
        slug: 'poison-july',
        superpower: 'Poison',
        weakness: 'Fire',
        age: 20,
        enemy: 'Batman',
      },
      {
        id: 98,
        age: 30,
        enemy: 'Joker',
        name: 'Batman',
        slug: 'batman',
        superpower: 'Richesse',
        weakness: 'Humain'
      },
      {
        id: 21,
        age: 14,
        enemy: 'Red man',
        name: 'Ganta Igarashi',
        slug: 'ganta',
        superpower: 'Ganta Gun',
        weakness: 'Brittle'
      },
      {
        id: 626,
        age: 20,
        enemy: 'Bonnie',
        name: 'Stitch',
        slug: 'stitch',
        superpower: 'POWER',
        weakness: 'ocean',
      },
      {
        id: 55555,
        age: 22,
        enemy: 'Droids',
        name: 'Fives',
        slug: 'fives',
        superpower: 'Sharp shooter',
        weakness: 'order 66'
      }
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
