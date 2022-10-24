import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Starship } from '../models/starship';

@Injectable({ providedIn: 'root' })
export class StarshipService {

  private starshipUrl = `${environment.apiUrl}/api/starships/`;

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
