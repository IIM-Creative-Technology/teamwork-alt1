import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';


import { GonComponent } from './Gon/gon.component';
import { ThorComponent } from './thor/thor.component';
import { AlexisLuthorComponent } from './alexis-luthor/alexis-luthor.component';


const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/gon', component: GonComponent},
  { path: 'detail/thor', component: ThorComponent },
  { path: 'detail/alexis-luthor', component: AlexisLuthorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
