import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CharacterService } from '@services/character.service';
import { LoaderService } from '@services/loader.service';
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
  exports: [LoaderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
