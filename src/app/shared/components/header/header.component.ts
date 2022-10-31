import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public arrowLeftIcon = faArrowLeft;

  constructor(private location: Location) {}

  public back(): void {
    this.location.back();
  }
}
