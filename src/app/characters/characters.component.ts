import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../core/services/character.service';
import { Character } from '../core/models/character';
import { LoaderService } from '../core/services/loader.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  pages: number = 9;
  currentPage: number = 1;
  searchInput: string;
  characters: Character[];

  constructor(
    private characterService: CharacterService,
    private loaderService: LoaderService
  ) { }

  getCharacters() {
    this.loaderService.show();
    this.characterService.getCharacters(this.currentPage)
    .subscribe(
      characters => {
        this.characters = characters.sort((a, b) => a.name < b.name ? -1 : 1);
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
