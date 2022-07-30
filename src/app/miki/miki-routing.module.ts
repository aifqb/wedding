import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { TituloComponent } from './pages/titulo/titulo.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {path: 'rifa', component: TituloComponent},
      {path: '**', redirectTo: 'rifa'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MikiRoutingModule { }
