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
        id: 2020,
        age: 19,
        enemy: 'Everyone',
        name: 'Roronoa Zoro',
        slug: 'roronoa-zoro',
        superpower: 'Swordsman',
        weakness: 'No weakness'
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
