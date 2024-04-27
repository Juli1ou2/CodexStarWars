import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTES } from '../constantes.enum';
import { Observable } from 'rxjs';
import { Vehicule } from '../interfaces/vehicule';

@Injectable({
  providedIn: 'root',
})
export class VehiculesService {
  constructor(private http: HttpClient) {}

  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(CONSTANTES.API_URL + 'vehicules', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  searchVehicules(nom: string): Observable<Vehicule[]> {
    const body = { nom: nom };
    return this.http.get<Vehicule[]>(CONSTANTES.API_URL + 'vehicules/nom/' + nom);
  }
}
