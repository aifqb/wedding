import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { IglesiaComponent } from './pages/iglesia/iglesia.component';
import { LocalComponent } from './pages/local/local.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { NaviComponent } from './pages/navi/navi.component';
import { CabeceraComponent } from './shared/cabecera/cabecera.component';
import { PadresComponent } from './shared/padres/padres.component';
import { InformacionComponent } from './shared/informacion/informacion.component';
import { ItinerarioComponent } from './shared/itinerario/itinerario.component';


@NgModule({
  declarations: [
    IglesiaComponent,
    LocalComponent,
    InicioComponent,
    HomeComponent,
    NaviComponent,
    CabeceraComponent,
    PadresComponent,
    InformacionComponent,
    ItinerarioComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
