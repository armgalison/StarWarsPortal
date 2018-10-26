import { Component, OnInit } from '@angular/core';
import { Starship } from '../../../core/models/starship';
import { StarshipService } from '../../../core/services/starship.service';
import { LoaderService } from '../../../core/services/loader.service';


@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  pages: number = 9;
  currentPage: number = 1;
  searchInput: string;
  starships: Starship[];
  isSortedByAlphabet: boolean = true;

  constructor(
    private starshipService: StarshipService,
    private loaderService: LoaderService
  ) { }

  sortStarshipsByAlphabet(starships: Starship[]): Starship[] {
    return starships.sort((a, b) => a.name < b.name ? -1 : 1);
  }

  sortStarshipsReverseAlphabetical(starships: Starship[]): Starship[] {
    return starships.sort((a, b) => a.name < b.name ? 1 : -1);
  }

  toggleSortStarships() {
    if (this.isSortedByAlphabet) {
      this.starships = this.sortStarshipsReverseAlphabetical(this.starships);
    } else {
      this.starships = this.sortStarshipsByAlphabet(this.starships);
    }
    this.isSortedByAlphabet = !this.isSortedByAlphabet;
  }

  getStarships() {
    this.loaderService.show();
    this.starshipService.getStartships(this.currentPage)
    .subscribe(
      starships => {
        this.starships = this.sortStarshipsByAlphabet(starships);
        this.loaderService.hide();
      }, error => {
        console.error(error);
        this.loaderService.hide();
      }
    );
  }

  getStarshipsByName() {
    if (this.searchInput.length === 0) {
      this.getStarships();
    } else {
      this.loaderService.show();
      this.starshipService.getStarshipsByName(this.searchInput)
      .subscribe(
        starships => {
          this.starships = starships;
          this.loaderService.hide();
        }, error => {
          console.error(error);
          this.loaderService.hide();
        }
      )
    }
  }

  getStarshipId(urlString: string) {
    return urlString.split('/')[5];
  }

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

  ngOnInit() {
    this.getStarships();
  }

}
