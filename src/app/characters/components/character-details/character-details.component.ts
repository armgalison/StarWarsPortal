import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/core/models/character';
import { CharacterService } from 'src/app/core/services/character.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  id: string;
  character: Character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private loaderService: LoaderService
  ) { }

  getCharacter() {
    this.loaderService.show();
    this.characterService.getCharacterById(this.id)
    .subscribe(
      character => {
        this.loaderService.hide();
        this.character = character;
      }, error => {
        this.loaderService.hide();
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.loaderService.show();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCharacter();
  }

}
