import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatmanComponent } from './batman/batman.component';

import { HeroesComponent } from './heroes/heroes.component';

import { PoisonJulyComponent } from './poison-july/poison-july.component';
import { StitchComponent } from './stitch/stitch.component';
import { FivesComponent } from './fives/fives.component';
import { CatwomanEoleComponent } from './catwoman-eole/catwoman-eole.component';

import { GonComponent } from './Gon/gon.component';
import { ThorComponent } from './thor/thor.component';
import { AlexisLuthorComponent } from './alexis-luthor/alexis-luthor.component';


const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/stitch', component: StitchComponent },
  { path: 'detail/fives', component: FivesComponent },
  { path: "detail/batman", component:BatmanComponent },
  { path: "detail/catwoman-eole", component:CatwomanEoleComponent },

  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/gon', component: GonComponent},
  { path: 'detail/thor', component: ThorComponent },
  { path: 'detail/alexis-luthor', component: AlexisLuthorComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
