import { Produit } from "./produit";

export class Ligne {
    art : Produit;
    nb : number;
    prix: number;
    taille : string;

    setPrix() {
        this.prix = this.nb*this.art.prix;
    }
}
