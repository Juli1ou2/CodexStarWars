import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTES } from '../constantes.enum';
import { Observable } from 'rxjs';
import { Espece } from '../interfaces/espece';

@Injectable({
  providedIn: 'root',
})
export class EspecesService {
  constructor(private http: HttpClient) {}

  getEspeces(): Observable<Espece[]> {
    return this.http.get<Espece[]>(CONSTANTES.API_URL + 'especes', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  searchEspeces(nom: string): Observable<Espece[]> {
    return this.http.get<Espece[]>(CONSTANTES.API_URL + 'especes/nom/' + nom);
  }

  getEspece(id: string): Observable<Espece> {
    return this.http.get<Espece>(CONSTANTES.API_URL + 'especes/' + id);
  }
}
