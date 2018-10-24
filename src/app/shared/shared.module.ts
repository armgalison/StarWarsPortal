import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  exports: [
    NgbModule,
    FooterComponent,
    HeaderComponent
  ],
  declarations: [FooterComponent, HeaderComponent]
})
export class SharedModule { }
