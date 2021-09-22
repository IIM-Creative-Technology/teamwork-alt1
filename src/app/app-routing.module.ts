import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatmanComponent } from './batman/batman.component';
import { KrilinComponent } from './krilin/krilin.component';
import { ZoroComponent } from './zoro/zoro.component';
import { HeroesComponent } from './heroes/heroes.component';
import { JolyneKujoComponent } from './jolyne-kujo/jolyne-kujo.component';
import { PhoenixWrightComponent } from './phoenix-wright/phoenix-wright.component';
import { JotaroKujoComponent } from './jotaro-kujo/jotaro-kujo.component';
import { PoisonJulyComponent } from './poison-july/poison-july.component';
import { AbdelComponent } from './abdel/abdel.component';
import { JessicaJonesComponent } from './jessica-jones/jessica-jones.component';
import { SanjiComponent } from './sanji/sanji.component';

import { StitchComponent } from './stitch/stitch.component';
import { FivesComponent } from './fives/fives.component';
import { GutsvidalComponent } from './Guts-vidal/Guts-vidal.component';



const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/abdel', component: AbdelComponent },
  { path: "detail/sanji", component:SanjiComponent },
  { path: 'detail/jolyne-kujo', component: JolyneKujoComponent },
  { path: 'detail/jessica-jones', component: JessicaJonesComponent },
  { path: 'detail/batman', component: BatmanComponent },
  { path: 'detail/krilin', component: KrilinComponent },
  { path: "detail/batman", component: BatmanComponent },
  { path: 'detail/roronoa-zoro', component: ZoroComponent },
  { path: 'detail/phoenix-wright', component: PhoenixWrightComponent },
  { path: 'detail/jotaro-kujo', component: JotaroKujoComponent },
  { path: 'detail/stitch', component: StitchComponent },
  { path: 'detail/fives', component: FivesComponent },
  { path: "detail/batman", component:BatmanComponent },
  { path: "detail/guts", component:GutsvidalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
