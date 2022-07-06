import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cumpleaños',
    loadChildren: () => import('./mapas/mapas.module').then( m =>m.MapasModule)
  },
  {
    path:'**',
    redirectTo: 'cumpleaños'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
