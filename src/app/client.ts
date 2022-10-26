import { Adresse } from "./adresse";
import { Utilisateur } from "./utilisateur";

export class Client {
    id:number;
    mail: string;
    date_creation:string;
    adresse: Adresse;
    mdp: string;
    nom: string;
    prenom: string;
    telephone: number;
    utilisateur:Utilisateur;

}