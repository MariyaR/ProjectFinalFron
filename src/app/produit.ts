import { Image } from "./image";
import { Taille } from "./taille";

export class Produit {
  
  id:number;
  reference: string;
  prix: number;
  descriptionCourte: string;
  descriptionLongue: string;
  marque: string;
  tailles: Array<Taille>=new Array();
  images: Array<Image>=new Array();
  categorie:string;
}
