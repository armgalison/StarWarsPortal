import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character.service';
import { LoaderService } from './services/loader.service';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    CharacterService,
    LoaderService
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class CoreModule { }
