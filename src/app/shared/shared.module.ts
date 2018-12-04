import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    NgbModule,
    HttpClientModule,
    FormsModule,
    FooterComponent,
    HeaderComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [FooterComponent, HeaderComponent ]
})
export class SharedModule { }
