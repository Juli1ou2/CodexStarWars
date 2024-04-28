import { Component } from '@angular/core';
import { EspecesService } from '../services/especes.service';
import { Espece } from '../interfaces/espece';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-especes',
  templateUrl: './especes.component.html',
  styleUrl: './especes.component.css',
})
export class EspecesComponent {
  especes: Espece[] = [];

  constructor(private especesService: EspecesService) {}

  submit(nom: string) {
    let especesData: Observable<Espece[]>;
    if (nom != '') {
      especesData = this.especesService.searchEspeces(nom);
    } else {
      especesData = this.especesService.getEspeces();
    }

    especesData.subscribe((res) => {
      this.especes = res;
    });
  }

  ngOnInit() {
    this.submit('');
  }
}
