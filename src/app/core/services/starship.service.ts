import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Character } from '@models/character';
import { Pagination } from '@models/pagination';
import { Starship } from '@models/starship';
import { from, Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { CharacterService } from './character.service';

@Injectable({ providedIn: 'root' })
export class StarshipService {

  private starshipUrl = `${environment.apiUrl}/api/starships`;

  constructor(
    private http: HttpClient,
    private characterService: CharacterService
  ) { }

  public getStartships(params: any): Observable<Pagination<Starship>> {
    return this.http.get<Pagination<Starship>>(`${this.starshipUrl}`, { params });
  }

  public getStarshipById(id: string): Observable<Starship> {
    return this.http.get<Starship>(`${this.starshipUrl}/${id}`);
  }

  public getStarshipWithPilotsById(id: string): Observable<Starship> {
    return this.getStarshipById(id).pipe(mergeMap(this.combinePilots.bind(this)));
  }

  private combinePilots(starship: Starship): Observable<Starship> {
    return this.getPilotsFromUrls(<string[]>starship.pilots).pipe(map(pilots => ({ ...starship, pilots })));
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
}
