import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../core/services/character.service';
import { Character } from '../core/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  isLoading: boolean = false;
  pages: number = 9;
  currentPage: number = 8;
  searchInput: string;
  characters: Character[];

  constructor(private characterService: CharacterService) { }

  getCharacters() {
    this.isLoading = true;
    this.characterService.getCharacters(this.currentPage)
    .subscribe(
      characters => {
        this.characters = characters.sort((a, b) => a.name < b.name ? -1 : 1);
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  getCharactersByName() {
    if (this.searchInput.length === 0) {
      this.getCharacters();
    } else {
      this.isLoading = true;
      this.characterService.getCharactersByName(this.searchInput)
      .subscribe(
        characters => {
          this.isLoading = false;
          this.characters = characters;
        }, error => {
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }

  getCharacterId(urlString: string) {
    return urlString.split('/')[5];
  }

  prevPage() {
    this.currentPage--;
    this.getCharacters();
  }

  nextPage() {
    this.currentPage++;
    this.getCharacters();
  }

  ngOnInit() {
    this.getCharacters();
  }
  
}
