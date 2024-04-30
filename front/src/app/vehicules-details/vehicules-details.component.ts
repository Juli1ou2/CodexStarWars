import { Component } from '@angular/core';
import { VehiculesService } from '../services/vehicules.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicule } from '../interfaces/vehicule';

@Component({
  selector: 'app-vehicules-details',
  templateUrl: './vehicules-details.component.html',
  styleUrl: './vehicules-details.component.css'
})
export class VehiculesDetailsComponent {
  vehiculeId : any;
  vehiculeDetails: Vehicule = {
    id: 0,
    nom: '...',
    description: '...',
    longueur: '____',
    vitesse: '____',
    classe: '____',
    moteur: '____',
    armes: '____',
    nbEquipage: 0,
    image: '',
    type: '____',
    organisations: []
  };
  isModerateur: boolean | undefined;
  isAdministrateur: boolean |undefined;

  constructor(private vehiculesService : VehiculesService, private activeRoute: ActivatedRoute) {
    this.isModerateur = localStorage.getItem('userRole') === 'Moderateur';
    this.isAdministrateur = localStorage.getItem('userRole') === 'Administrateur';
  }

  ngOnInit() {
    this.vehiculeId = this.activeRoute.snapshot.paramMap.get('id'); // fait référence à l'id dans app-routing.module.ts
    this.vehiculesService.getVehicule(this.vehiculeId).subscribe((vehicule) => {
      this.vehiculeDetails = vehicule;
    });
  }

  deleteVehicule(): void {
    if (window.confirm('⚠ Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      this.vehiculesService.delete(this.vehiculeDetails.id);
    }
  }
}
