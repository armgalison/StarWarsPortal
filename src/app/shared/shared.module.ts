import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
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
    LoaderComponent
  ],
  declarations: [FooterComponent, HeaderComponent, LoaderComponent]
})
export class SharedModule { }
