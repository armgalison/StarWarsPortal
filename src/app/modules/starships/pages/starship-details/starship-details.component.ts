import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Starship } from 'src/app/core/models/starship';

import { CharacterService } from 'src/app/core/services/character.service';
import { StarshipService } from 'src/app/core/services/starship.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  id: string;
  starship: Starship;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private starshipService: StarshipService,
    private loaderService: LoaderService
  ) { }

  getPilotIdFromUrl(url: string) {
    return url.split('/')[5];
  }

  async getPilotsFromUrls(urls: string[]) {
    const promiseArray = [];
    urls.forEach(url => {
      promiseArray.push(this.characterService.getCharacterById(this.getPilotIdFromUrl(url)).toPromise());
    });
    return await Promise.all(promiseArray);
  }

  async getStarshipsWithPilots(id: string) {
    let starship: Starship;
    starship = await this.starshipService.getStarshipById(id).toPromise();
    starship.pilots = await this.getPilotsFromUrls(starship.pilots);
    return starship;
  }

  getStarship(id: string) {
    this.loaderService.show();
    this.getStarshipsWithPilots(id)
    .then(starship => {
      console.log(starship);
      this.starship = starship;
      this.loaderService.hide();
    })
    .catch(error => {
      console.error(error);
      this.loaderService.hide();
    })
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getStarship(this.id);
  }

}
