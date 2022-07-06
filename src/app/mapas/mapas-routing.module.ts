import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IglesiaComponent } from './pages/iglesia/iglesia.component';
import { LocalComponent } from './pages/local/local.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  // {
  //   path:'',
  //   component: HomeComponent,
  //   children: [
  //     {path: 'iglesia', component: IglesiaComponent},
  //     {path: 'salon', component: LocalComponent},
  //     {path: 'invitacion', component: InicioComponent},
  //     {path: '**', redirectTo: 'invitacion'},
  //   ]
  // }
  {
    path:'',
    component: HomeComponent,
    children: [
      {path: 'iglesia', component: InicioComponent},
      {path: 'salon', component: InicioComponent},
      {path: 'invitacion', component: InicioComponent},
      {path: '**', redirectTo: 'invitacion'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
