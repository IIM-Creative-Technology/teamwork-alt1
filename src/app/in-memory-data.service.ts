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
        weakness: "Fire",
        age: 20,
        enemy: "Batman"
      },
      {
        id: 98,
        age: 30,
        enemy: "Joker",
        name: "Batman",
        slug: "batman",
        superpower: "Richesse",
        weakness: "Humain"
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
        enemy: "Droids",
        name: "Fives",
        slug: "fives",
        superpower: "Sharp shooter",
        weakness: "order 66"
      },
      {
        id: 21,
        age: 81,
        enemy: "Alberto Falcone",
        name: "Catwoman",
        slug: "catwoman-eole",
        superpower: "agile",
        weakness: "stereotypical weaknesses of cats",

      },
      {
        id: 44,
        name: 'Gon',
        slug: 'gon',
        superpower: 'Nen renforcement',
        age: 28,
        weakness: 'tro for',
        enemy: 'Hisoka'
      },
      {
        id: 9,
        name: 'thor',
        slug: 'thor',
        superpower: 'marteau',
        age: 35,
        weakness: 'dos',
        enemy: 'méchants'
      },
      {
        id: 2014,
        name: 'Alexis Luthor',
        slug: 'alexis-luthor',
        superpower: 'Genius Level Intellect',
        age: 29,
        weakness: 'Kryptonite',
        enemy: 'Superman'

      }
    ];
    return { heroes };
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
