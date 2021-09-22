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
        id: 152,
        name: 'Mikey',
        slug: 'mikey-tokyorevengers',
        superpower: 'Too cool',
        age: 16,
        weakness : 'None',
        enemy : 'Himself'
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
        id: 3,
        name: 'Cassian',
        slug: 'cassian-alexis',
        superpower: 'Darkness',
        age: 18,
        weakness: 'A hero who became a villain',
        enemy: 'Psykers'
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

      },
      {
        id: 11,
        name: 'Poison July',
        slug: 'poison-july',
        superpower: 'Poison'
      },
      {

        id: 10,
        name: 'Goku',
        slug: 'goku',
        superpower: 'Saiyan',
        age: 38,
        weakness: 'Gentillesse',
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
        id: 448,
        age: 16,
        name: 'Tsuyu Asui',
        slug: 'tsuyu-asui',
        enemy: "Les Vilains",
        superpower: 'Grenouille',
        weakness: "unknown",
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
        weakness: '',
        enemy: '',
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
        age: 10,
        enemy: "Droids",
        name: "Fives",
        slug: "fives",
        superpower: "sharp shooter",
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
        id: 2014,
        name: 'Alexis Luthor',
        slug: 'alexis-luthor',
        superpower: 'Genius Level Intellect',
        age: 29,
        weakness: 'Kryptonite',
        enemy: 'Superman'
      },
      {

        id: 40,
        age: 24,
        enemy: "Griffith",
        name: "Guts",
        slug: "guts",
        superpower: "Force Surhumaine",
        weakness: "God Hand"
      },
      {
        id: 44,
        name: 'Gon',
        slug: 'gon',
        superpower: 'Nen renforcement',
        enemy:"Hisoka",
        age: 28,
        weakness:"trop fort"
      },
      {
        id: 4,
        age: 20,
        enemy: "Naruto",
        name: 'Gaara of the Sand',
        slug: 'gaara-fideline',
        superpower: 'Sand',
        weakness: "Fire",

      },
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
