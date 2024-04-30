import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Profil } from '../interfaces/profil';
import { CONSTANTES } from '../constantes.enum';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private router: Router) {}
  
  verifConnexion(profil: Profil): Observable<boolean> {
    return this.http
      .post<any>(
        CONSTANTES.API_URL + 'auth/login',
        profil,
        this.httpOptions
      )
      .pipe(
        map((response) => {
          if (response.access_token) {
            return true;
          } else {
            alert('Erreur lors de la connexion ! Aucun token reçu.');
            return false;
          }
        }),
        catchError((error) => {
          console.log('Erreur lors de la connexion : ' + error.message);
          return of(false); // Retourne un observable contenant "false" en cas d'erreur
        })
      );
  }
  getUser(username: string): Observable<User> {
    return this.http.get<User>(CONSTANTES.API_URL+'users/username/'+username.toString());
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(CONSTANTES.API_URL + 'users', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  delete(id: number) {
    this.http
      .delete(CONSTANTES.API_URL + 'users/' + id.toString())
      .subscribe({
        next: () => {
          alert('User supprimé avec succès !');
          this.router.navigate(['/profil']);
        },
        error: (error) => {
          alert('Erreur lors de la suppression de l\'User : ' + error);
        },
      });
  }
}
