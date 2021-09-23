import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KrilinComponent } from './krilin/krilin.component';
import { ZoroComponent } from './zoro/zoro.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ThorComponent } from './thor/thor.component';
import { TsuyuAsuiComponent } from './tsuyu-asui/tsuyu-asui.component';


import { PoisonJulyComponent } from './poison-july/poison-july.component';
import { JujuComponent } from './juliette-starling/juju.component';
import { MikeyComponent} from './mikey-jeanpierre/mikey-jeanpierre.component';
import { CassianComponent } from './cassian-alexis/cassian-alexis.component';
import { GonComponent } from './Gon/gon.component';
import { AlexisLuthorComponent } from './alexis-luthor/alexis-luthor.component';

import { JolyneKujoComponent } from './jolyne-kujo/jolyne-kujo.component';
import { PhoenixWrightComponent } from './phoenix-wright/phoenix-wright.component';
import { JotaroKujoComponent } from './jotaro-kujo/jotaro-kujo.component';

import { GantaComponent} from './ganta/ganta.component';
import { GokuComponent } from './goku/goku.component';
import { SanjiComponent } from './sanji/sanji.component';
import { StitchComponent } from './stitch/stitch.component';
import { FivesComponent } from './fives/fives.component';
import { CatwomanEoleComponent } from './catwoman-eole/catwoman-eole.component';
import { GutsvidalComponent } from './Guts-vidal/Guts-vidal.component';
import { MulanFidelineComponent } from './mulan-fideline/mulan-fideline.component';
import { BatmanComponent } from './batman/batman.component';
import { JessicaJonesComponent } from './jessica-jones/jessica-jones.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/poison-july', component: PoisonJulyComponent },
  { path: 'detail/juliette-starling', component: JujuComponent },
  { path: 'detail/mikey-tokyorevengers', component: MikeyComponent },
  { path: 'detail/ganta', component: GantaComponent },
  { path: 'detail/tsuyu-asui', component: TsuyuAsuiComponent },
  { path: 'detail/cassian-alexis', component: CassianComponent },
  { path: 'detail/gon', component: GonComponent},
  { path: 'detail/thor', component: ThorComponent },
  { path: 'detail/alexis-luthor', component: AlexisLuthorComponent },
  { path: 'detail/goku', component: GokuComponent },
  { path: 'detail/sanji', component: SanjiComponent },
  { path: 'detail/jolyne-kujo', component: JolyneKujoComponent },
  { path: 'detail/krilin', component: KrilinComponent },
  { path: 'detail/roronoa-zoro', component: ZoroComponent },
  { path: 'detail/phoenix-wright', component: PhoenixWrightComponent },
  { path: 'detail/jotaro-kujo', component: JotaroKujoComponent },
  { path: 'detail/stitch', component: StitchComponent },
  { path: 'detail/fives', component: FivesComponent },
  { path: 'detail/catwoman-eole', component: CatwomanEoleComponent },
  { path: 'detail/guts', component: GutsvidalComponent },
  { path: 'detail/gaara-fideline', component: MulanFidelineComponent },
  { path : 'detail/batman', component: BatmanComponent },
  { path : 'detail/jessica-jones', component: JessicaJonesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
