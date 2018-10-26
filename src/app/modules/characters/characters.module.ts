import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { SpecieModalComponent } from './components/specie-modal/specie-modal.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule
  ],
  declarations: [CharactersListComponent , CharacterDetailsComponent, SpecieModalComponent]
})
export class CharactersModule { }
