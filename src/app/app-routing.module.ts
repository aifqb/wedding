import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'miguel',
    loadChildren: () => import('./miki/miki.module').then( m =>m.MikiModule)
  },
  {
    path:'**',
    redirectTo: 'miguel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
