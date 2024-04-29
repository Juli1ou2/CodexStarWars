import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Personnage } from '../interfaces/personnage';
import { PersonnagesService } from '../services/personnages.service';
@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrl: './personnages.component.css',
})
export class PersonnagesComponent {
  personnages: Personnage[] = [];

  constructor(private personnagesService: PersonnagesService) {}

  submit(nom: string) {
    let personnagesData: Observable<Personnage[]>;
    if (nom != '') {
      personnagesData = this.personnagesService.searchPersonnages(nom);
    } else {
      personnagesData = this.personnagesService.getPersonnages();
    }

    personnagesData.subscribe((res) => {
      this.personnages = res;
    });
  }

  ngOnInit() {
    this.submit('');
  }
}
