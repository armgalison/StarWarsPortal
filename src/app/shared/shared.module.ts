import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    NgbModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [FooterComponent, HeaderComponent ]
})
export class SharedModule { }
