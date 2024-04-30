import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CONSTANTES } from '../constantes.enum';
import { Personnage } from '../interfaces/personnage';
@Injectable({
  providedIn: 'root',
})
export class PersonnagesService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient, private router: Router) {}

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

  getPersonnage(id: number): Observable<Personnage> {
    return this.http.get<Personnage>(CONSTANTES.API_URL + 'personnages/' + id);
  }
  delete(id: number) {
    this.http
      .delete(CONSTANTES.API_URL + 'personnages/' + id.toString())
      .subscribe({
        next: () => {
          alert('Personnage supprimé avec succès !');
          this.router.navigate(['/personnages']);
        },
        error: (error) => {
          alert('Erreur lors de la suppression du personnage : ' + error);
        },
      });
  }
  post(personnage: Personnage) {
    this.http
      .post<Personnage>(
        CONSTANTES.API_URL + 'personnages',
        personnage,
        this.httpOptions
      )
      .subscribe({
        next: () => {
          alert('Personnage ajouté avec succès !');
          this.router.navigate(['/personnages']);
        },
        error: (error) => {
          alert('Erreur lors de l’ajout du personnage !' + error);
        },
      });
  }

  put(personnage: Personnage) {
    this.http
      .put(CONSTANTES.API_URL + 'personnages', personnage, this.httpOptions)
      .subscribe({
        next: () => {
          alert('personnage modifié avec succès !');
          this.router.navigate(['/personnages']);
        },
        error: (error) => {
          alert('Erreur lors de la modification du personnage : ' + error);
        },
      });
  }
}
