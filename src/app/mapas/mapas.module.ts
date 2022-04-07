import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { IglesiaComponent } from './components/iglesia/iglesia.component';
import { LocalComponent } from './components/local/local.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    IglesiaComponent,
    LocalComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
