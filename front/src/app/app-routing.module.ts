import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { VehiculesDetailsComponent } from './vehicules-details/vehicules-details.component';

const routes: Routes = [
  { path: 'vehicules', component: VehiculesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'vehicules/details/:id', component: VehiculesDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
