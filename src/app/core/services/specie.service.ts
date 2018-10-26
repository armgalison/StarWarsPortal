import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { Specie } from '../models/specie';


@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  private speciesUrl = 'https://swapi.co/api/species/';

  constructor(private http: HttpClient) { }

  getSpecieById(id: string) {
    return this.http.get(`${this.speciesUrl}${id}`) as Observable<Specie>;
  }
}
