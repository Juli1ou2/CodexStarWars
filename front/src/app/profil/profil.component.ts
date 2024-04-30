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
  users: User[] = [];
  user : User | undefined;
  isModerateur: boolean | undefined;
  isAdministrateur: boolean |undefined;

  constructor(private profilService: ProfilService, private router : Router){
    this.isModerateur = localStorage.getItem('userRole') === 'Moderateur';
    this.isAdministrateur = localStorage.getItem('userRole') === 'Administrateur';
  }

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
  getUsers() {
    let userData: Observable<User[]>;
    userData = this.profilService.getUsers();

    userData.subscribe((res) => {
      this.users = res;
    });
    console.log(this.users);
  }
  ngOnInit(){
    if(this.isAdministrateur){
      this.getUsers();
    }
  }
  deleteUser(idUser : number): void {
    if (window.confirm('⚠ Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      this.profilService.delete(idUser);
      window.location.reload();
    }
  }
}
