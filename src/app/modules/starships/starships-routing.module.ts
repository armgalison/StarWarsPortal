import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';
import { StarshipsListComponent } from './pages/starships-lsit/starships-list.component';

const routes: Routes = [
  {
    path: '',
    component: StarshipsListComponent,
  },
  {
    path: ':id',
    component: StarshipDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
