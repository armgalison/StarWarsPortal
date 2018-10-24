import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../core/services/character.service';
import { Character } from '../../core/models/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  isLoading: boolean;
  id: string;
  character: Character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  getCharacter() {
    this.isLoading = true;
    this.characterService.getCharacterById(this.id)
    .subscribe(
      character => {
        this.isLoading = false;
        this.character = character;
      }, error => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCharacter();
  }

}
