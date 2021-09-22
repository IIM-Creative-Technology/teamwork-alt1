import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';

import { PoisonJulyComponent } from './poison-july/poison-july.component';
import { CassianComponent } from './cassian-alexis/cassian-alexis.component';
import { GonComponent } from './Gon/gon.component';
import { ThorComponent } from './thor/thor.component';
import { AlexisLuthorComponent } from './alexis-luthor/alexis-luthor.component';


const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/cassian-alexis', component: CassianComponent },
  { path: 'detail/gon', component: GonComponent},
  { path: 'detail/thor', component: ThorComponent },
  { path: 'detail/alexis-luthor', component: AlexisLuthorComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
