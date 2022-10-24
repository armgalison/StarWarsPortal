import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Specie } from '../models/specie';


@Injectable({ providedIn: 'root' })
export class SpecieService {

  private speciesUrl = `${environment.apiUrl}/api/species/`;

  constructor(private http: HttpClient) { }

  getSpecieById(id: string) {
    return this.http.get(`${this.speciesUrl}${id}`) as Observable<Specie>;
  }
}
