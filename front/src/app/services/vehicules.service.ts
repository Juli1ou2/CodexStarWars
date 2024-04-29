import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTES } from '../constantes.enum';
import { Observable, catchError } from 'rxjs';
import { Vehicule } from '../interfaces/vehicule';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class VehiculesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

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

  getVehicule(id: number): Observable<Vehicule> {
    return this.http.get<Vehicule>(CONSTANTES.API_URL + 'vehicules/' + id.toString());
  }

  delete(id: number) {
    this.http
      .delete(CONSTANTES.API_URL + 'vehicules/' + id.toString())
      .subscribe({
        next: () => {
          alert('Véhicule supprimé avec succès !');
          this.router.navigate(['/vehicules']);
        },
        error: (error) => {
          alert('Erreur lors de la suppression du véhicule : ' + error);
        },
      });
  }

  post(vehicule: Vehicule) {
    this.http
      .post<Vehicule>(
        CONSTANTES.API_URL + 'vehicules',
        vehicule,
        this.httpOptions
      )
      .subscribe({
        next: () => {
          alert('Véhicule ajouté avec succès !');
          this.router.navigate(['/vehicules']);
        },
        error: (error) => {
          alert('Erreur lors de l’ajout du véhicule !' + error);
        },
      });
  }

  put(vehicule: Vehicule) {
    this.http
      .put(CONSTANTES.API_URL + 'vehicules', vehicule, this.httpOptions)
      .subscribe({
        next: () => {
          alert('Véhicule modifié avec succès !');
          this.router.navigate(['/vehicules']);
        },
        error: (error) => {
          alert('Erreur lors de la modification du véhicule : ' + error);
        },
      });
  }
}
