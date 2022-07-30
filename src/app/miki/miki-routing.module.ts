import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { TituloComponent } from './pages/titulo/titulo.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {path: 'porMike', component: TituloComponent},
      {path: '**', redirectTo: 'porMike'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MikiRoutingModule { }
