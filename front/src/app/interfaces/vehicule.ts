import { Organisation } from './organisation';

export interface Vehicule {
  id: number;
  nom: string;
  description: string;
  longueur: string;
  vitesse: string;
  classe: string;
  moteur: string;
  armes: string;
  nbEquipage: number;
  image: string;
  type: string;
  organisations: Organisation[];
}
