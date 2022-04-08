import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { IglesiaComponent } from './pages/iglesia/iglesia.component';
import { LocalComponent } from './pages/local/local.component';
import { InicioComponent } from './pages/inicio/inicio.component';


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
