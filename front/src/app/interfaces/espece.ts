import { Personnage } from "./personnage";

export interface Espece {
  id: number;
  nom: string;
  description: string;
  classification: string;
  taille: string;
  couleurCorps: string;
  couleurPoils: string;
  habitat: string;
  langage: string;
  image: string;
  personnages: Personnage[];
}
