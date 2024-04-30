import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  session : boolean | undefined;

  constructor(private router: Router){
    this.session = localStorage.getItem('userRole') === 'Administrateur' || localStorage.getItem('userRole') === 'Moderateur';
  }
  logout(): void {
    localStorage.removeItem('userRole');
    alert('Utilisateur déconnecté');
    window.location.reload();
  }
}
