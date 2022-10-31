import { Component, OnInit } from '@angular/core';
import { Starship } from '@models/starship';
import { LoaderService } from '@services/loader.service';
import { StarshipService } from '@services/starship.service';
import { ToastService } from '@services/toast.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  public currentPage: number = 1;
  public searchInput: string = '';
  public starships: Starship[];
  public isSortedByAlphabet: boolean = true;
  public count: number;

  constructor(
    private starshipService: StarshipService,
    private loaderService: LoaderService,
    private toastService: ToastService
  ) { }

  public async getStarships(page = 1): Promise<void> {
    try {
      this.loaderService.show();
      const params = { page, search: this.searchInput };
      const { count, results } = await this.starshipService.getStartships(params).toPromise();
      this.starships = results;
      this.count = count;
    } catch(error) {
      this.toastService.danger(`Unable to load starships, please try again.`);
      console.error(error);
    } finally {
      this.loaderService.hide();
    }
  }

  public getStarshipId(urlString: string): string {
    return urlString.split('/')[5];
  }

  public ngOnInit(): void {
    this.getStarships(1);
  }

  public toggleSortStarships(): void {
    this.starships = this.isSortedByAlphabet
      ? this.sortStarshipsReverseAlphabetical(this.starships)
      : this.sortStarshipsByAlphabet(this.starships)
    this.isSortedByAlphabet = !this.isSortedByAlphabet;
  }

  private sortStarshipsByAlphabet(starships: Starship[]): Starship[] {
    return starships.sort((a, b) => a.name < b.name ? -1 : 1);
  }

  private sortStarshipsReverseAlphabetical(starships: Starship[]): Starship[] {
    return starships.sort((a, b) => a.name < b.name ? 1 : -1);
  }

}
