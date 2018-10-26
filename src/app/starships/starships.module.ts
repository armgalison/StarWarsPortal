import { NgModule } from '@angular/core';

import { StarshipsRoutingModule } from './starships-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from './pages/starships-lsit/starships-list.component';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StarshipsRoutingModule
  ],
  declarations: [StarshipsListComponent, StarshipDetailsComponent]
})
export class StarshipsModule { }
