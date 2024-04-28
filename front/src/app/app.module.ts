import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderContainerComponent } from './commun/border-container/border-container.component';
import { CategoryButtonComponent } from './commun/category-button/category-button.component';
import { ListeOrganisationsComponent } from './commun/liste-organisations/liste-organisations.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VehiculesDetailsComponent } from './vehicules-details/vehicules-details.component';
import { VehiculesComponent } from './vehicules/vehicules.component';

import { PersonnagesDetailsComponent } from './personnages-details/personnages-details.component';
import { PersonnagesComponent } from './personnages/personnages.component';

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

    PersonnagesComponent,
    PersonnagesDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
