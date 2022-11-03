import { loadCharacters } from '@actions/characters.action';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Character } from '@models/character';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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

  public characters$: Observable<Character[]> = this.store.select((state) => state.characters.characters);
  public count$: Observable<number> = this.store.select((state) => state.characters.charactersCount);
  public currentPage$: Observable<number> = this.store.select((state) => state.characters.charactersCurrentPage);;

  public isSortedByAlphabet: boolean = true;
  public searchInput: string = '';

  constructor(
    private store: Store<{ characters: { characters: Character[], charactersCount: number, charactersCurrentPage: number } }>,
  ) { }

  public toggleSortCharacters(): void {
    this.isSortedByAlphabet = !this.isSortedByAlphabet;
  }

  public getCharacterId(urlString: string): string {
    return urlString.split('/')[5];
  }

  public ngOnInit(): void {
    this.store.dispatch({ type: '[Characters] Load Characters', payload: { page: 1, search: '' } });
  }

  private sortCharactersByAlphabet(characters: Character[]): Character[] {
    return characters.sort((a, b) => a.name < b.name ? -1 : 1);
  }

  private sortCharactersReverseAlphabetical(characters: Character[]): Character[] {
    return characters.sort((a, b) => a.name < b.name ? 1 : -1);
  }

  public setPage(page: number = 1): void {
    this.store.dispatch({ type: loadCharacters.type, payload: { page, search: this.searchInput } });
  }

}
