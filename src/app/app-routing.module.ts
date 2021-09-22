import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatmanComponent } from './batman/batman.component';

import { HeroesComponent } from './heroes/heroes.component';
import { PoisonJulyComponent } from './poison-july/poison-july.component';
import { SanjiComponent } from './sanji/sanji.component';


const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: "detail/batman", component:BatmanComponent },
  { path: "detail/sanji", component:SanjiComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
