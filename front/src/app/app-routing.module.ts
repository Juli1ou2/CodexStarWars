import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { EspecesDetailsComponent } from './especes-details/especes-details.component';
import { EspecesComponent } from './especes/especes.component';
import { PersonnageFormComponent } from './personnage-form/personnage-form.component';
import { PersonnagesDetailsComponent } from './personnages-details/personnages-details.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { VehiculesDetailsComponent } from './vehicules-details/vehicules-details.component';
import { VehiculesComponent } from './vehicules/vehicules.component';

const routes: Routes = [
  { path: 'vehicules', component: VehiculesComponent },
  { path: 'especes', component: EspecesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'vehicules/details/:id', component: VehiculesDetailsComponent },

  { path: 'personnages', component: PersonnagesComponent },
  { path: 'personnages/details/:id', component: PersonnagesDetailsComponent },
  { path: 'personnages/form/:id', component: PersonnageFormComponent },
  { path: 'especes/details/:id', component: EspecesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
