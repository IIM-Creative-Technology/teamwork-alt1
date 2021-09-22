import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KrilinComponent } from './krilin/krilin.component';
import { ZoroComponent } from './zoro/zoro.component';
import { HeroesComponent } from './heroes/heroes.component';

import { ThorComponent } from './thor/thor.component';

import { JolyneKujoComponent } from './jolyne-kujo/jolyne-kujo.component';
import { PhoenixWrightComponent } from './phoenix-wright/phoenix-wright.component';
import { JotaroKujoComponent } from './jotaro-kujo/jotaro-kujo.component';
import { PoisonJulyComponent } from './poison-july/poison-july.component';
import { JessicaJonesComponent } from './jessica-jones/jessica-jones.component';
import { GokuComponent } from './goku/goku.component';

import { SanjiComponent } from './sanji/sanji.component';
import { StitchComponent } from './stitch/stitch.component';
import { FivesComponent } from './fives/fives.component';
import { CatwomanEoleComponent } from './catwoman-eole/catwoman-eole.component';

import { GonComponent } from './Gon/gon.component';

import { AlexisLuthorComponent } from './alexis-luthor/alexis-luthor.component';
import { GutsvidalComponent } from './Guts-vidal/Guts-vidal.component';
import { MulanFidelineComponent } from './mulan-fideline/mulan-fideline.component';


const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/gon', component: GonComponent},
  { path: 'detail/alexis-luthor', component: AlexisLuthorComponent },
  { path: 'detail/thor', component: ThorComponent },
  { path: 'detail/goku', component: GokuComponent },
  { path: "detail/sanji", component: SanjiComponent },
  { path: 'detail/jolyne-kujo', component: JolyneKujoComponent },
  { path: 'detail/krilin', component: KrilinComponent },
  { path: 'detail/roronoa-zoro', component: ZoroComponent },
  { path: 'detail/phoenix-wright', component: PhoenixWrightComponent },
  { path: 'detail/jotaro-kujo', component: JotaroKujoComponent },
  { path: 'detail/stitch', component: StitchComponent },
  { path: 'detail/fives', component: FivesComponent },
<<<<<<< HEAD
  { path: 'detail/jessica-jones', component: JessicaJonesComponent },
=======

  { path: "detail/catwoman-eole", component:CatwomanEoleComponent },

  { path: 'detail/gon', component: GonComponent},
  { path: 'detail/thor', component: ThorComponent },
  { path: 'detail/alexis-luthor', component: AlexisLuthorComponent },

>>>>>>> f87f8a8166f96caef2e28942c3f4acd0830c94d5
  { path: "detail/guts", component:GutsvidalComponent },
  { path: 'detail/gaara-fideline', component: MulanFidelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
