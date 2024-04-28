import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { VehiculesDetailsComponent } from './vehicules-details/vehicules-details.component';
import { EspecesComponent } from './especes/especes.component';
import { EspecesDetailsComponent } from './especes-details/especes-details.component';

const routes: Routes = [
  { path: 'vehicules', component: VehiculesComponent },
  { path: 'especes', component: EspecesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'vehicules/details/:id', component: VehiculesDetailsComponent },
  { path: 'especes/details/:id', component: EspecesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
