import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersUrl = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1): Observable<Character[]> {
    return this.http.get(`${this.charactersUrl}?page=${page}`)
    .pipe(map(res => {
      return res['results']
    })) as Observable<Character[]>;
  }

  getCharactersByName(name: string): Observable<Character[]> {
    return this.http.get(`${this.charactersUrl}?search=${name}`)
    .pipe(map(res => res['results'] )) as Observable<Character[]>;
  }

  getCharacterById(id: number): Observable<Character> {
    return this.http.get(`${this.charactersUrl}${id}`) as Observable<Character>;
  }


}
