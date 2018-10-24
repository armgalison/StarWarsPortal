import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    CharacterService
  ],
  declarations: []
})
export class CoreModule { }
