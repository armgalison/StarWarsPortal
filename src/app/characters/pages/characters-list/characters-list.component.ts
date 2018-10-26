import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import { Character } from '../../../core/models/character';
import { CharacterService } from '../../../core/services/character.service';
import { LoaderService } from '../../../core/services/loader.service';

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
    private loaderService: LoaderService
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
    this.characterService.getCharacters(this.currentPage)
    .subscribe(
      characters => {
        this.characters = this.sortCharactersByAlphabet(characters);
        this.loaderService.hide();
      }, error => {
        this.loaderService.hide();
        console.log(error);
      }
    );
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
    console.log(`====> ${urlString.split('/')[5]}`)
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
  }
  
}
