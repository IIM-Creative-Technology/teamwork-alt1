import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatmanComponent } from './batman/batman.component';
import { KrilinComponent } from './krilin/krilin.component';

import { HeroesComponent } from './heroes/heroes.component';
import { PoisonJulyComponent } from './poison-july/poison-july.component';


const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/batman', component: BatmanComponent },
  { path: 'detail/krilin', component: KrilinComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
