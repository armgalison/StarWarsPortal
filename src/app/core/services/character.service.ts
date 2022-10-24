import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Character } from '../models/character';

@Injectable({ providedIn: 'root' })
export class CharacterService {

  private charactersUrl = `${environment.apiUrl}/api/people/`;

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

  getCharacterById(id: string): Observable<Character> {
    return this.http.get(`${this.charactersUrl}${id}`) as Observable<Character>;
  }


}
