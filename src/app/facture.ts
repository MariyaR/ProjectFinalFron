import { Ligne } from "./ligne";

export class Facture {
    client: string;
    lignes : Array<Ligne> = new Array<Ligne>();
    total : number=0;
}
