import { ClientTo } from "./client-to";
import { ProduitTo } from "./produit-to";

export class ProduitsTo {
    Produits : Array<ProduitTo> = new Array();
    Client: ClientTo;
    Total:number;
}
