import { ClientTo } from "./client-to";
import { ProduitTo } from "./produit-to";

export class ProduitsTo {
    produits : Array<ProduitTo> = new Array();
    client: ClientTo = new ClientTo;
    total:number;
}
