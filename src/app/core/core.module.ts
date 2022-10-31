import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from '@services/character.service';
import { LoaderService } from '@services/loader.service';
import { ToastService } from '@services/toast.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    CharacterService,
    LoaderService,
    ToastService
  ],
  declarations: [
    LoaderComponent,
    ToastComponent
  ],
  exports: [
    LoaderComponent,
    ToastComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
