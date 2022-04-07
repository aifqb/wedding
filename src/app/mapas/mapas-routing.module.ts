import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IglesiaComponent } from './components/iglesia/iglesia.component';
import { LocalComponent } from './components/local/local.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [

  {
    path:'',
    children: [
      {path: 'iglesia', component: IglesiaComponent},
      {path: 'local', component: LocalComponent},
      {path: 'inicio', component: InicioComponent},
      {path: '**', redirectTo: 'inicio'},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
