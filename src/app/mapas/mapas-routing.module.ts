import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IglesiaComponent } from './pages/iglesia/iglesia.component';
import { LocalComponent } from './pages/local/local.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [

  {
    path:'',
    children: [
      {path: 'iglesia', component: IglesiaComponent},
      {path: 'local', component: LocalComponent},
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
