import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personnage } from '../interfaces/personnage';
import { PersonnagesService } from '../services/personnages.service';

@Component({
  selector: 'app-personnage-form',
  templateUrl: './personnage-form.component.html',
  styleUrl: './personnage-form.component.css',
})
export class PersonnageFormComponent {
  @Input() titrePage: string | undefined;
  PersonnageId = 0;
  dataPersonnage: Personnage = {
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
    try {
      const idParam = this.activeRoute.snapshot.paramMap.get('id');
      if (idParam !== null) {
        this.PersonnageId = parseInt(idParam);
      }
    } catch (e) {
      alert('Erreur : ' + e);
    }
    if (this.PersonnageId == 0) {
      this.titrePage = 'Ajouter';
    } else {
      this.titrePage = 'Modifier';
      this.personnagesService
        .getPersonnage(this.PersonnageId)
        .subscribe((personnage) => {
          this.dataPersonnage = personnage;
        });
    }
  }
  submit(data: Personnage) {
    this.dataPersonnage = data;
    this.dataPersonnage.id = this.PersonnageId;

    if (this.dataPersonnage.id == 0) {
      this.personnagesService.post(this.dataPersonnage);
    } else {
      this.personnagesService.put(this.dataPersonnage);
    }
  }
}
