import { Client } from "./client";
import { Produit } from "./produit";

export class Commande {
    id:number;
    dateCreation:Date;
    client:Client;
    produits:Array<Produit>;
    total:number;
}
