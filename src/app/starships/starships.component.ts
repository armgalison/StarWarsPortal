import { Component, OnInit } from '@angular/core';
import { Starship } from '../core/models/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  pages: number = 9;
  currentPage: number = 1;
  searchInput: string;
  starships: Starship[];
  isSortedByAlphabet: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSortStarships() {}

  getStarships() {}

  prevPage() {
    if (this.currentPage - 1 > 0) {
      this.currentPage--;
      this.getStarships();
    }
  }

  nextPage() {
    if (this.currentPage + 1 < 10) {
      this.currentPage++;
      this.getStarships();
    }
  }

}
