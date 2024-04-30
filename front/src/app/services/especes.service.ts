import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANTES } from '../constantes.enum';
import { Observable } from 'rxjs';
import { Espece } from '../interfaces/espece';
import { Router } from '@angular/router';

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
    return this.http.get<Espece[]>(
      CONSTANTES.API_URL + 'especes/nom/' + nom
    );
  }

  getEspece(id: number): Observable<Espece> {
    return this.http.get<Espece>(CONSTANTES.API_URL + 'especes/' + id);
  }

  delete(id: number) {
    this.http.delete(CONSTANTES.API_URL + 'especes/' + id.toString()).subscribe(
      () => {
        alert('Espèce supprimé avec succès !');
        this.router.navigate(['/especes']);
      },
      (error) => {
        alert('Erreur lors de la suppression de l\'espèce : ' + error);
      }
    );
  }

  post(espece: Espece) {
    this.http.post(CONSTANTES.API_URL + 'especes', espece, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  
  put(espece: Espece) {
    this.http.post(CONSTANTES.API_URL + 'especes', espece, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
