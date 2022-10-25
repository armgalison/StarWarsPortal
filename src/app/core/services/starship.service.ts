import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '@models/pagination';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Starship } from '../models/starship';

@Injectable({ providedIn: 'root' })
export class StarshipService {

  private starshipUrl = `${environment.apiUrl}/api/starships`;

  constructor(private http: HttpClient) { }

  public getStartships(params: any): Observable<Pagination<Starship>> {
    return this.http.get<Pagination<Starship>>(`${this.starshipUrl}`, { params });
  }

  public getStarshipById(id: string): Observable<Starship> {
    return this.http.get<Starship>(`${this.starshipUrl}/${id}`);
  }

}
