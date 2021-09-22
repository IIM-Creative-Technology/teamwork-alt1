import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

import { PoisonJulyComponent } from './poison-july/poison-july.component';
<<<<<<< HEAD
import { JessicaJonesComponent } from './jessica-jones/jessica-jones.component';
=======
import { GonComponent } from './Gon/gon.component';
import { ThorComponent } from './thor/thor.component';
import { AlexisLuthorComponent } from './alexis-luthor/alexis-luthor.component';

>>>>>>> origin

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
<<<<<<< HEAD
  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/jessica-jones', component: JessicaJonesComponent }
=======

  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/gon', component: GonComponent},
  { path: 'detail/thor', component: ThorComponent },
  { path: 'detail/alexis-luthor', component: AlexisLuthorComponent }

>>>>>>> origin
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
