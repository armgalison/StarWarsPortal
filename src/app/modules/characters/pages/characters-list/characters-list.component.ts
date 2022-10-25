import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Character } from '@models/character';
import { CharacterService } from '@services/character.service';
import { LoaderService } from '@services/loader.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({ transform: 'scale(1)', opacity: 1 }))
      ]),
    ])
  ]
})
export class CharactersListComponent implements OnInit {

  public count: number;
  public characters: Character[];
  public currentPage: number = 1;
  public isSortedByAlphabet: boolean = true;
  public searchInput: string = '';

  constructor(
    private characterService: CharacterService,
    private loaderService: LoaderService,
  ) { }

  public toggleSortCharacters(): void {
    this.characters = this.isSortedByAlphabet
      ? this.sortCharactersReverseAlphabetical(this.characters)
      : this.sortCharactersByAlphabet(this.characters);
    this.isSortedByAlphabet = !this.isSortedByAlphabet;
  }

  public async getCharacters(page = 1): Promise<void> {
    try {
      this.loaderService.show();
      const { count, results } = await this.characterService.getCharacters({ page, search: this.searchInput }).toPromise();
      this.currentPage = page;
      this.count = count;
      this.characters = results;
    } catch (error) {
      console.error(error);
    } finally {
      this.loaderService.hide();
    }
  }

  public getCharacterId(urlString: string): string {
    return urlString.split('/')[5];
  }

  public ngOnInit() {
    this.getCharacters();
  }

  private sortCharactersByAlphabet(characters: Character[]): Character[] {
    return characters.sort((a, b) => a.name < b.name ? -1 : 1);
  }

  private sortCharactersReverseAlphabetical(characters: Character[]): Character[] {
    return characters.sort((a, b) => a.name < b.name ? 1 : -1);
  }

}
