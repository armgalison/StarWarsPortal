import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule
  ],
  declarations: [CharactersComponent, CharacterDetailsComponent]
})
export class CharactersModule { }
