import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {

        id: 11,
        name: 'Poison July',
        slug: 'poison-july',
        superpower: 'Poison'
      },
      {
        id: 152,
        name: 'Mikey',
        slug: 'mikey-tokyorevengers',
        superpower: 'Too cool',
        age: 16,
        weakness : 'None',
        ennemy : 'Himself'
      },
      {
        id: 44,
        name: 'Gon',
        slug: 'gon',
        superpower: 'Nen renforcement',
        age: 28,
        weakness: 'tro for',
        ennemy: 'Hisoka'
      },
      {
        id: 9,
        name: 'thor',
        slug: 'thor',
        superpower: 'marteau',
        age: 35,
        weakness: 'dos',
        ennemy: 'méchants'
      },
      {
        id: 2014,
        name: 'Alexis Luthor',
        slug: 'alexis-luthor',
        superpower: 'Genius Level Intellect',
        age: 29,
        weakness: 'Kryptonite',
        ennemy: 'Superman'

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
