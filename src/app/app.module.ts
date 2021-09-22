import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { PoisonJulyComponent } from './poison-july/poison-july.component';
import { MikeyComponent } from './mikey-jeanpierre/mikey-jeanpierre.component';
import { CassianComponent } from './cassian-alexis/cassian-alexis.component';
import { GonComponent } from './Gon/gon.component';
import { ThorComponent } from './thor/thor.component';
import { AlexisLuthorComponent } from './alexis-luthor/alexis-luthor.component';

import { GokuComponent } from './goku/goku.component';
import { PhoenixWrightComponent } from './phoenix-wright/phoenix-wright.component';
import { JotaroKujoComponent } from './jotaro-kujo/jotaro-kujo.component';
import { StitchComponent } from './stitch/stitch.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { CatwomanEoleComponent } from './catwoman-eole/catwoman-eole.component';

import { FivesComponent } from './fives/fives.component';
import { GutsvidalComponent } from './Guts-vidal/Guts-vidal.component';
import { SanjiComponent } from './sanji/sanji.component';
import { JolyneKujoComponent } from './jolyne-kujo/jolyne-kujo.component';
import { KrilinComponent } from './krilin/krilin.component';
import { ZoroComponent } from "./zoro/zoro.component";
import { MulanFidelineComponent } from './mulan-fideline/mulan-fideline.component';


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
    PoisonJulyComponent,
    MikeyComponent,
    GonComponent,
    ThorComponent,
    AlexisLuthorComponent,
    GokuComponent,
    JolyneKujoComponent,
    PhoenixWrightComponent,
    HeroSearchComponent,
    SanjiComponent,
    KrilinComponent,
    JotaroKujoComponent,
    StitchComponent,
    MessagesComponent,
    ZoroComponent,
    FivesComponent,
    GutsvidalComponent,
    CatwomanEoleComponent,
    MulanFidelineComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
