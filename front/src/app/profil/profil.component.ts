import { Component, Input } from '@angular/core';
import { Profil } from '../interfaces/profil';
import { ProfilService } from '../services/profil.service';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  @Input() titrePage: string | undefined;
  profilData: Profil = {
    username: '',
    password: '',
  };
  user : User | undefined;

  constructor(private profilService: ProfilService, private router : Router){}

  submit(profilData: Profil) {
    this.profilData = profilData;
  
    // Appel du service pour vérifier la connexion
    this.profilService.verifConnexion(this.profilData).subscribe((bool: boolean) => {
      if (bool) {
        // Connexion réussie
        this.profilService.getUser(profilData.username).subscribe((user) => this.user=user);
        if(this.user){
          localStorage.removeItem('userRole');
          localStorage.setItem('userRole', this.user.role);
          console.log("Connexion réussie ! valeur : "+localStorage.getItem('userRole'));
          alert("Connexion réussie ! Role : "+localStorage.getItem('userRole'));
          
          window.location.reload();
        }
      } else {
        // Connexion échouée
        alert("Indentifiants incorrects, veuillez recommencer.");
      }
    });
  }
  
}
