import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTES } from '../constantes.enum';
import { Observable } from 'rxjs';
import { Vehicule } from '../interfaces/vehicule';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VehiculesService {
  constructor(private http: HttpClient, private router: Router) {}

  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(CONSTANTES.API_URL + 'vehicules', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  searchVehicules(nom: string): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(
      CONSTANTES.API_URL + 'vehicules/nom/' + nom
    );
  }

  getVehicule(id: string): Observable<Vehicule> {
    return this.http.get<Vehicule>(CONSTANTES.API_URL + 'vehicules/' + id);
  }

  delete(id: number) {
    this.http.delete(CONSTANTES.API_URL + 'vehicules/' + id.toString()).subscribe(
      () => {
        alert('Véhicule supprimé avec succès !');
        this.router.navigate(['/vehicules']);
      },
      (error) => {
        alert('Erreur lors de la suppression du véhicule : ' + error);
      }
    );
  }

  post(vehicule: Vehicule) {
    this.http.post(CONSTANTES.API_URL + 'vehicules', vehicule, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  
  put(vehicule: Vehicule) {
    this.http.post(CONSTANTES.API_URL + 'vehicules', vehicule, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
