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
    this.isLoading = true;
    this.characterService.getCharactersByName('luke')
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

  ngOnInit() {
    this.getCharacters();
  }
  

  // this.characterService.getCharacterById(85)
  // .subscribe(
  //   character => {
  //     console.log('By Id: ', character);
  //   }, error => {
  //     console.log(error);
  //   }
  // );
}
