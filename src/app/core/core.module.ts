import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { characterReducer, charactersReducer } from '@reducers/characters.reducer';
import { CharacterService } from '@services/character.service';
import { LoaderService } from '@services/loader.service';
import { ToastService } from '@services/toast.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastComponent } from './components/toast/toast.component';
import { CharactersEffects } from './effects/characters.effect';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ characters: charactersReducer, character: characterReducer }),
    EffectsModule.forRoot([CharactersEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    CharacterService,
    LoaderService,
    ToastService,
    CharactersEffects
  ],
  declarations: [
    LoaderComponent,
    ToastComponent
  ],
  exports: [
    LoaderComponent,
    ToastComponent,
    EffectsModule,
    StoreModule,
    StoreDevtoolsModule
  ],
})
export class CoreModule { }
