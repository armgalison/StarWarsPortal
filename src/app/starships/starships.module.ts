import { NgModule } from '@angular/core';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StarshipsRoutingModule
  ],
  declarations: [StarshipsComponent]
})
export class StarshipsModule { }
