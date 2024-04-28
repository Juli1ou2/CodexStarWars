import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTES } from '../constantes.enum';
import { Personnage } from '../interfaces/personnage';
@Injectable({
  providedIn: 'root',
})
export class PersonnagesService {
  constructor(private http: HttpClient) {}

  getPersonnages(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>(CONSTANTES.API_URL + 'personnages', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  searchPersonnages(nom: string): Observable<Personnage[]> {
    return this.http.get<Personnage[]>(
      CONSTANTES.API_URL + 'personnages/nom/' + nom
    );
  }

  getPersonnges(id: string): Observable<Personnage> {
    return this.http.get<Personnage>(CONSTANTES.API_URL + 'personnages/' + id);
  }
}
