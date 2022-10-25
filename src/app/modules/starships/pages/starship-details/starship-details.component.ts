import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@models/character';
import { Starship } from '@models/starship';
import { CharacterService } from '@services/character.service';
import { LoaderService } from '@services/loader.service';
import { StarshipService } from '@services/starship.service';
import { from, Observable } from 'rxjs';
import { map, mergeMap, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  public id: string;
  public starship: Starship;

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private starshipService: StarshipService,
    private loaderService: LoaderService
  ) { }

  public ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getStarshipWithPilots(this.id);
  }

  private getPilotIdFromUrl(url: string): string {
    return url.split('/')[5];
  }

  private getPilotsFromUrls(urls: string[] = []): Observable<Character[]> {
    return from(urls).pipe(
      map(url => this.getPilotIdFromUrl(url)),
      mergeMap(id => this.characterService.getCharacterById(id)),
      toArray(),
    );
  }

  private combinePilots(starship: Starship): Observable<Starship> {
    return this.getPilotsFromUrls(<string[]>starship.pilots).pipe(map(pilots => ({ ...starship, pilots })));
  }

  private getStarshipWithPilots(id: string): void {
    this.starshipService.getStarshipById(id).pipe(
      tap(() => this.loaderService.show()),
      mergeMap(starship => this.combinePilots(starship))
    ).subscribe({
      next: (starship) => this.starship = starship,
      error: (error) => console.error(error),
      complete: () => this.loaderService.hide()
    });
  }
}
