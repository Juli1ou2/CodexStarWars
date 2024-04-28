import { Component, Input } from '@angular/core';
import { Organisation } from '../../interfaces/organisation';

@Component({
  selector: 'app-liste-organisations',
  templateUrl: './liste-organisations.component.html',
  styleUrl: './liste-organisations.component.css'
})
export class ListeOrganisationsComponent {
  @Input() organisations: Organisation[] | undefined;
}
