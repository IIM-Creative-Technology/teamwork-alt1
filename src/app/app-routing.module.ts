import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { PoisonJulyComponent } from './poison-july/poison-july.component';
import { JessicaJonesComponent } from './jessica-jones/jessica-jones.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/jessica-jones', component: JessicaJonesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
