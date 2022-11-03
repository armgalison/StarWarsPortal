import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@models/character';
import { Pagination } from '@models/pagination';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class CharacterService {

  private charactersUrl = `${environment.apiUrl}/api/people/`;

  constructor(private http: HttpClient) { }

  public getCharacters(params: { page: number, search? : string }): Observable<Pagination<Character>> {
    return this.http.get<Pagination<Character>>(`${this.charactersUrl}`, { params })
      .pipe(map(data => ({ ...data, page: params.page })));
  }

  public getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.charactersUrl}${id}`);
  }

}
