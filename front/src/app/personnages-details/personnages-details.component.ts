import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personnage } from '../interfaces/personnage';
import { PersonnagesService } from '../services/personnages.service';

@Component({
  selector: 'app-personnages-details',
  templateUrl: './personnages-details.component.html',
  styleUrl: './personnages-details.component.css',
})
export class PersonnagesDetailsComponent {
  personnageId: any;
  personnageDetails: Personnage = {
    id: 0,
    nom: '...',
    description: '...',
    alias: '...',
    date_de_naissance: '...',
    lieu_de_naissance: '...',
    date_de_mort: '...',
    lieu_de_mort: '...',
    image: '',
    genre: '...',
  };
  constructor(
    private personnagesService: PersonnagesService,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.personnageId = this.activeRoute.snapshot.paramMap.get('id'); // fait référence à l'id dans app-routing.module.ts
    this.personnagesService
      .getPersonnage(this.personnageId)
      .subscribe((personnage) => {
        this.personnageDetails = personnage;
      });
  }
  deletePersonnage(): void {
    if (window.confirm('⚠ Êtes-vous sûr de vouloir supprimer cet élément ?')) {
      this.personnagesService.delete(this.personnageDetails.id);
    }
  }
}
