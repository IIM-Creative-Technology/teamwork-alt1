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
        superpower: 'Poison'
      },
      {
        id: 10,
        name: 'Goku',
        slug: 'abdel',
        superpower: 'Saiyan',
        age: 10,
        weakness: 'Kind',
        enemy: 'Frieza, Broly, Jiren, Cell, Janemba, ....... '
      },
      {
        id: 6,
        name: 'Phoenix Wright',
        slug: 'phoenix-wright',
        superpower: 'Law',
        age: 27,
        weakness: 'Miles Edgeworth',
        enemy: 'Criminals',
      },
      {
        id: 1,
        name: 'Jotaro Kujo',
        slug: 'jotaro-kujo',
        superpower: 'Star Platinium',
        age: 17,
        weakness: 'Distance',
        enemy: 'DIO',
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
        id: 17,
        age: 21,
        enemy: "Kaido",
        name: "Sanji",
        slug: "sanji",
        superpower: "Techniques de la jambe noire",
        weakness: "Les Femmes"
      },
      {
        id: 16,
        age: 19,
        name: 'Jolyne Kujo',
        slug: 'jolyne-kujo',
        superpower: 'Stand Stone Free',
      },
      {
        id: 69,
        age: 18,
        enemy: 'Boo',
        name: 'Krilin',
        slug: 'krilin',
        superpower: 'Super Saiyan',
        weakness: 'Chauve'
      },
      {
        id: 2020,
        age: 19,
        enemy: 'Everyone',
        name: 'Roronoa Zoro',
        slug: 'roronoa-zoro',
        superpower: 'Swordsman',
        weakness: 'No weakness'
      },
      {
        id:626,
        age: 20,
        enemy: 'Bonnie',
        name: 'Stitch',
        slug: 'stitch',
        superpower: 'POWER',
        weakness: 'ocean',
      },
      {
        id: 55555,
        age: 10,
        enemy: "Droids",
        name: "Fives", 
        slug: "fives",
        superpower: "sharp shooter",
        weakness: "order 66"
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
