import { Component } from '@angular/core';
import { VehiculesService } from '../services/vehicules.service';
import { Vehicule } from '../interfaces/vehicule';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrl: './vehicules.component.css'
})
export class VehiculesComponent {
  // vehicules: Vehicule[];
  vehicules: any;

  constructor(private vehiculesService: VehiculesService){}

  ngOnInit(){
    let vehiculesData = this.vehiculesService.getVehicules();

    vehiculesData.subscribe(res => {
      this.vehicules = res;
    })
  }
}
