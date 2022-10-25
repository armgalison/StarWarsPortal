import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Specie } from '@models/specie';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpecieService {

  private speciesUrl = `${environment.apiUrl}/api/species`;

  constructor(private http: HttpClient) { }

  public getSpecieById(id: string): Observable<Specie> {
    return this.http.get<Specie>(`${this.speciesUrl}/${id}`);
  }
}
