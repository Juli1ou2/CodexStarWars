import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PersonnagesDetailsComponent } from './personnages-details/personnages-details.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { VehiculesDetailsComponent } from './vehicules-details/vehicules-details.component';
import { VehiculesComponent } from './vehicules/vehicules.component';

const routes: Routes = [
  { path: 'vehicules', component: VehiculesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'vehicules/details/:id', component: VehiculesDetailsComponent },
  { path: 'personnages', component: PersonnagesComponent },
  { path: 'personnages/details/:id', component: PersonnagesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
