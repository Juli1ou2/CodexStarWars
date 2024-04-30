import { Component, Input } from '@angular/core';
import { Personnage } from '../../interfaces/personnage';

@Component({
  selector: 'app-liste-personnages',
  templateUrl: './liste-personnages.component.html',
  styleUrl: './liste-personnages.component.css'
})
export class ListePersonnagesComponent {
  @Input() personnages: Personnage[] | undefined;
}
