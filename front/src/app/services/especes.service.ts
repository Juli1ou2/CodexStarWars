import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CONSTANTES } from '../constantes.enum';
import { Espece } from '../interfaces/espece';

@Injectable({
  providedIn: 'root',
})
export class EspecesService {
  constructor(private http: HttpClient, private router: Router) {}

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

  delete(id: number) {
    this.http
      .delete(CONSTANTES.API_URL + 'personnages/' + id.toString())
      .subscribe(
        () => {
          alert('Personnage supprimé avec succès !');
          this.router.navigate(['/personnages']);
        },
        (error) => {
          alert('Erreur lors de la suppression du personnage : ' + error);
        }
      );
  }
}
