import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Organisation } from '../interfaces/organisation';
import { CONSTANTES } from '../constantes.enum';

@Injectable({
  providedIn: 'root',
})
export class OrganisationsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private router: Router) {}

  getOrganisations(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(CONSTANTES.API_URL + 'organisations');
  }

  putOrganisationsToVehicule(idVehicule: number, listeOrganisationsId: number[]) {
    this.http
      .put(
        CONSTANTES.API_URL + 'vehicules/' + idVehicule + '/organisations',
        { organisations: listeOrganisationsId },
        this.httpOptions
      )
      .subscribe({
        next: () => {
          alert('Organisations mise à jour avec succès !');
          this.router.navigate(['/vehicules/details/' + idVehicule]);
        },
        error: (error) => {
          alert('Erreur lors de la modification des organisations : ' + error);
        },
      });
  }
}
