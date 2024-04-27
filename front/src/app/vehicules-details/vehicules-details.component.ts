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
    nom: '',
    description: '',
    longueur: '',
    vitesse: '',
    classe: '',
    moteur: '',
    armes: '',
    nbEquipage: 0,
    image: '',
    type: '',
    organisations: []
  };

  constructor(private vehiculesService : VehiculesService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.vehiculeId = this.activeRoute.snapshot.paramMap.get('id'); // fait référence à l'id dans app-routing.module.ts
    this.vehiculesService.getVehicule(this.vehiculeId).subscribe((vehicule) => {
      this.vehiculeDetails = vehicule;
    });
  }
}
