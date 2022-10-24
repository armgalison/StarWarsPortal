import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '@models/pagination';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Character } from '../models/character';

@Injectable({ providedIn: 'root' })
export class CharacterService {

  private charactersUrl = `${environment.apiUrl}/api/people/`;

  constructor(private http: HttpClient) { }

  public getCharacters(params: any): Observable<Pagination<Character>> {
    return this.http.get<Pagination<Character>>(`${this.charactersUrl}`, { params });
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get(`${this.charactersUrl}${id}`) as Observable<Character>;
  }

}
