import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Character } from 'src/app/core/models/character';
import { CharacterService } from 'src/app/core/services/character.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { AppState } from 'src/app/reducers';
import { GetCharacters } from '../../char.actions';
import { noop } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
    ])
  ]
})
export class CharactersListComponent implements OnInit {

  pages: number = 9;
  currentPage: number = 1;
  searchInput: string;
  characters: Character[];
  isSortedByAlphabet: boolean = true;

  constructor(
    private characterService: CharacterService,
    private loaderService: LoaderService,
    private store: Store<AppState>
  ) { }

  sortCharactersByAlphabet(characters: Character[]): Character[] {
    return characters.sort((a, b) => a.name < b.name ? -1 : 1);
  }

  sortCharactersReverseAlphabetical(characters: Character[]): Character[] {
    return characters.sort((a, b) => a.name < b.name ? 1 : -1);
  }

  toggleSortCharacters() {
    if (this.isSortedByAlphabet) {
      this.characters = this.sortCharactersReverseAlphabetical(this.characters);
    } else {
      this.characters = this.sortCharactersByAlphabet(this.characters);
    }
    this.isSortedByAlphabet = !this.isSortedByAlphabet;
  }

  getCharacters() {
    this.loaderService.show();
    const page = this.currentPage;

    const handleError = (errorMessage: string) => {
      this.loaderService.hide();
      console.error(errorMessage);
    }

    this.characterService.getCharacters(this.currentPage)
    .pipe(
      tap(characters => {
        this.store.dispatch(new GetCharacters({ characters, page }));
        this.loaderService.hide();
      })
    )
    .subscribe(noop, handleError);
  }

  getCharactersByName() {
    if (this.searchInput.length === 0) {
      this.getCharacters();
    } else {
      this.loaderService.show();
      this.characterService.getCharactersByName(this.searchInput)
      .subscribe(
        characters => {
          this.loaderService.hide();
          this.characters = characters;
        }, error => {
          this.loaderService.hide();
          console.log(error);
        }
      );
    }
  }

  getCharacterId(urlString: string) {
    return urlString.split('/')[5];
  }

  prevPage() {
    if (this.currentPage - 1 > 0) {
      this.currentPage--;
      this.getCharacters();
    }
  }

  nextPage() {
    if (this.currentPage + 1 < 10) {
      this.currentPage++;
      this.getCharacters();
    }
  }

  ngOnInit() {
    this.getCharacters();
    this.store.pipe(
      map(store => {
        this.currentPage = store.characters.page;
        this.characters = store.characters.characters;
      })
    ).subscribe();
  }
  
}
