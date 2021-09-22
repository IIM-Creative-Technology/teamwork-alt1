import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ThorComponent } from './thor/thor.component';
import { PoisonJulyComponent } from './poison-july/poison-july.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { AbdelComponent } from './abdel/abdel.component';
=======
import { GokuComponent } from './goku/goku.component';
>>>>>>> 9ab7e10b90c9d4ccdaff9f2b05fcd5e3f974fe87
import { PhoenixWrightComponent } from './phoenix-wright/phoenix-wright.component';
import { JotaroKujoComponent } from './jotaro-kujo/jotaro-kujo.component';
import { StitchComponent } from './stitch/stitch.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { FivesComponent } from './fives/fives.component';
import { BatmanComponent } from './batman/batman.component';
import { GutsvidalComponent } from './Guts-vidal/Guts-vidal.component';
<<<<<<< HEAD
import { JessicaJonesComponent } from './jessica-jones/jessica-jones.component';
=======
>>>>>>> 9ab7e10b90c9d4ccdaff9f2b05fcd5e3f974fe87
import { SanjiComponent } from './sanji/sanji.component';
import { JolyneKujoComponent } from './jolyne-kujo/jolyne-kujo.component';
import { KrilinComponent } from './krilin/krilin.component';
import { ZoroComponent } from "./zoro/zoro.component";

=======
import { MulanFidelineComponent } from './mulan-fideline/mulan-fideline.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
>>>>>>> gaara

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
<<<<<<< HEAD

=======
    ThorComponent,
>>>>>>> 9ab7e10b90c9d4ccdaff9f2b05fcd5e3f974fe87
    PoisonJulyComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    AbdelComponent,
=======
    GokuComponent,
>>>>>>> 9ab7e10b90c9d4ccdaff9f2b05fcd5e3f974fe87
    JolyneKujoComponent,
    JessicaJonesComponent,
    PhoenixWrightComponent,
    MessagesComponent,
    HeroSearchComponent,
    SanjiComponent,
    KrilinComponent,
    JotaroKujoComponent,
    StitchComponent,
    MessagesComponent,
    HeroSearchComponent,
    BatmanComponent,
    ZoroComponent,
    FivesComponent,
    BatmanComponent,
<<<<<<< HEAD
    GutsvidalComponent,
=======
    GutsvidalComponent
=======
    MulanFidelineComponent,
    MessagesComponent,
    HeroSearchComponent,
>>>>>>> gaara
>>>>>>> 6e1a55ece970e74ff54dc471fa0a41d12b3c16c4
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
