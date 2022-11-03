import { loadCharacter } from '@actions/characters.action';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from '@models/character';
import { Specie } from '@models/specie';
import { Store } from '@ngrx/store';

import { CharacterService } from '@services/character.service';
import { SpecieService } from '@services/specie.service';
import { Observable } from 'rxjs';
import { SpecieModalComponent } from '../../components/specie-modal/specie-modal.component';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  @ViewChild('specieModal') public specieModal: SpecieModalComponent;

  public character$: Observable<Character> = this.store.select((state) => state.character);

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private specieService: SpecieService,
    private store: Store<{ character: Character }>,
  ) { }

  public async getCharacterWithSpecies(id: string): Promise<Character> {
    const character = await this.characterService.getCharacterById(id).toPromise();
    const species = await this.getSpeciesFromUrls(character.species);
    return { ...character, species };
  }

  public ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch({ type: loadCharacter.type, payload: id });
  }

  public openSpecieModal(specie: Specie): void {
    this.specieModal.open(specie);
  }

  private async getSpeciesFromUrls(urls: string[] = []): Promise<Specie[]> {
    const speciesIds = urls.map(this.getSpecieIdFromUrl);
    const promiseArray = speciesIds.map(specieId => this.specieService.getSpecieById(specieId).toPromise());
    return Promise.all(promiseArray);
  }

  private getSpecieIdFromUrl(url: string): string {
    return url.split('/')[5];
  }

}
