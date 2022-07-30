import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MikiRoutingModule } from './miki-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { TituloComponent } from './pages/titulo/titulo.component';
import { PremiosComponent } from './pages/premios/premios.component';
import { DatosComponent } from './pages/datos/datos.component';


@NgModule({
  declarations: [
    HomeComponent,
    TituloComponent,
    PremiosComponent,
    DatosComponent
  ],
  imports: [
    CommonModule,
    MikiRoutingModule
  ]
})
export class MikiModule { }
