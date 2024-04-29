import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CategoryButtonComponent } from './commun/category-button/category-button.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { BorderContainerComponent } from './commun/border-container/border-container.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VehiculesDetailsComponent } from './vehicules-details/vehicules-details.component';
import { ListeOrganisationsComponent } from './commun/liste-organisations/liste-organisations.component';
import { EspecesComponent } from './especes/especes.component';
import { EspecesDetailsComponent } from './especes-details/especes-details.component';
import { VehiculeFormComponent } from './vehicule-form/vehicule-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    CategoryButtonComponent,
    VehiculesComponent,
    BorderContainerComponent,
    VehiculesDetailsComponent,
    ListeOrganisationsComponent,
    EspecesComponent,
    EspecesDetailsComponent,
    VehiculeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
