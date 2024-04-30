import { Component } from '@angular/core';
import { VehiculesService } from '../services/vehicules.service';
import { Vehicule } from '../interfaces/vehicule';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrl: './vehicules.component.css',
})
export class VehiculesComponent {
  vehicules: Vehicule[] = [];
  isModerateur: boolean | undefined;
  isAdministrateur: boolean |undefined;

  constructor(private vehiculesService: VehiculesService) {
    this.isModerateur = localStorage.getItem('userRole') === 'Moderateur';
    this.isAdministrateur = localStorage.getItem('userRole') === 'Administrateur';
  }

  submit(nom: string) {
    let vehiculesData: Observable<Vehicule[]>;
    if (nom != '') {
      vehiculesData = this.vehiculesService.searchVehicules(nom);
    } else {
      vehiculesData = this.vehiculesService.getVehicules();
    }

    vehiculesData.subscribe((res) => {
      this.vehicules = res;
    });
  }

  ngOnInit() {
    this.submit('');
  }
}
