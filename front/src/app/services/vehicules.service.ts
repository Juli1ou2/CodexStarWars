import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTES } from '../constantes.enum';

@Injectable({
  providedIn: 'root',
})
export class VehiculesService {
  constructor(private http: HttpClient) {}

  getVehicules() {
    return this.http.get(CONSTANTES.API_URL + 'vehicules', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
