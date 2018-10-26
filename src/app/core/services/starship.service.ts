import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Starship } from '../models/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  private starshipUrl = 'https://swapi.co/api/starships/';

  constructor(private http: HttpClient) { }

  getStartships(page: number = 1): Observable<Starship[]> {
    return this.http.get(`${this.starshipUrl}?page=${page}`)
    .pipe(map(res => {
      return res['results']
    })) as Observable<Starship[]>;
  }

  getStarshipsByName(name: String): Observable<Starship[]> {
    return this.http.get(`${this.starshipUrl}?search=${name}`)
    .pipe(map(res => res['results'] )) as Observable<Starship[]>;
  }

  getStarshipById(id: string): Observable<Starship> {
    return this.http.get(`${this.starshipUrl}${id}`) as Observable<Starship>;
  }

}
