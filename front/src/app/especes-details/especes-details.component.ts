import { Component } from '@angular/core';
import { EspecesService } from '../services/especes.service';
import { ActivatedRoute } from '@angular/router';
import { Espece } from '../interfaces/espece';

@Component({
  selector: 'app-especes-details',
  templateUrl: './especes-details.component.html',
  styleUrl: './especes-details.component.css'
})
export class EspecesDetailsComponent {
  especeId : any;
  especeDetails: Espece = {
    id: 0,
    nom: '',
    description: '',
    classification: '',
    taille: '',
    couleurCorps: '',
    couleurPoils: '',
    habitat: '',
    langage: '',
    image: '',
    personnages: []
  };

  constructor(private especesService : EspecesService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.especeId = this.activeRoute.snapshot.paramMap.get('id'); // fait référence à l'id dans app-routing.module.ts
    this.especesService.getEspece(this.especeId).subscribe((espece) => {
      this.especeDetails = espece;
    });
  }

  deleteEspece(): void {
    if (window.confirm('⚠ Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      this.especesService.delete(this.especeDetails.id);
    }
  }
}
