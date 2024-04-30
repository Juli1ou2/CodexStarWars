import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EspecesService } from '../services/especes.service';
import { Espece } from '../interfaces/espece';
import { Personnage } from '../interfaces/personnage';
import { PersonnagesService } from '../services/personnages.service';

@Component({
  selector: 'app-espece-form',
  templateUrl: './espece-form.component.html',
  styleUrl: './espece-form.component.css',
})
export class EspeceFormComponent {
  @Input() titrePage: string | undefined;
  especeId = 0;
  dataEspece: Espece = {
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
    personnages: [],
  };
  personnages: Personnage[] | undefined;
  personnagesSelectionnees: number[] = [];

  constructor(
    private especesService: EspecesService,
    private personnagesService: PersonnagesService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    try {
      const idParam = this.activeRoute.snapshot.paramMap.get('id');
      if (idParam !== null) {
        this.especeId = parseInt(idParam);
      }
    } catch (e) {
      alert('Erreur : ' + e);
    }

    if (this.especeId == 0) {
      this.titrePage = 'Ajouter';
    } else {
      this.titrePage = 'Modifier';
      this.especesService
        .getEspece(this.especeId)
        .subscribe((espece) => {
          this.dataEspece = espece;
        });
      this.personnagesService
        .getPersonnages()
        .subscribe((personnages) => {
          this.personnages = personnages;
        });
    }
  }

  submit(data: Espece) {
    this.dataEspece = data;
    this.dataEspece.id = this.especeId;

    if (this.dataEspece.id == 0) {
      this.especesService.post(this.dataEspece);
    } else {
      this.especesService.put(this.dataEspece);
    }
  }

  submitOrga(data: any) {
    const keysWithTrueValue = Object.keys(data)
      .filter((key) => data[key] === true)
      .map((key) => parseInt(key));
    this.personnagesService.putPersonnagesToEspece(this.especeId, keysWithTrueValue);
  }
}
