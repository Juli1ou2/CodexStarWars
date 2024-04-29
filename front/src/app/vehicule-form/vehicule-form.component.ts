import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculesService } from '../services/vehicules.service';
import { Vehicule } from '../interfaces/vehicule';

@Component({
  selector: 'app-vehicule-form',
  templateUrl: './vehicule-form.component.html',
  styleUrl: './vehicule-form.component.css',
})
export class VehiculeFormComponent {
  @Input() titrePage: string | undefined;
  vehiculeId = 0;
  dataVehicule: Vehicule = {
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

  constructor(
    private vehiculesService: VehiculesService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    try {
      const idParam = this.activeRoute.snapshot.paramMap.get('id');
      if (idParam !== null) {
        this.vehiculeId = parseInt(idParam);
      }
    } catch (e) {
      alert('Erreur : ' + e);
    }

    if (this.vehiculeId == 0) {
      this.titrePage = 'Ajouter';
    } else {
      this.titrePage = 'Modifier';
      this.vehiculesService.getVehicule(this.vehiculeId).subscribe((vehicule) => {
        this.dataVehicule = vehicule;
      });
      
    }
  }

  submit(data: Vehicule) {
    this.dataVehicule = data;
    this.dataVehicule.id = this.vehiculeId;

    if (this.dataVehicule.id == 0) {
      this.vehiculesService.post(this.dataVehicule);
    } else {
      this.vehiculesService.put(this.dataVehicule);
    }
  }
}
