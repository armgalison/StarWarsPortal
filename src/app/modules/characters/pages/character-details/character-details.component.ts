import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from '@models/character';
import { Specie } from '@models/specie';

import { CharacterService } from '@services/character.service';
import { LoaderService } from '@services/loader.service';
import { SpecieService } from '@services/specie.service';
import { ToastService } from '@services/toast.service';
import { SpecieModalComponent } from '../../components/specie-modal/specie-modal.component';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  @ViewChild('specieModal') public specieModal: SpecieModalComponent;

  public character: Character;
  public id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private specieService: SpecieService,
    private loaderService: LoaderService,
    private toastService: ToastService
  ) { }

  public async getCharacterWithSpecies(id: string): Promise<Character> {
    const character = await this.characterService.getCharacterById(id).toPromise();
    const species = await this.getSpeciesFromUrls(character.species);
    return { ...character, species };
  }

  public async getCharacter(id: string): Promise<void> {
    try {
      this.loaderService.show();
      this.character = await this.getCharacterWithSpecies(id);
    } catch (error) {
      console.error(error);
      this.toastService.danger(`Unable to load character, please try again.`);
    } finally {
      this.loaderService.hide();
    }
  }

  public ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCharacter(this.id);
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
