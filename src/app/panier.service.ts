import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from './facture';
import { Ligne } from './ligne';
import { ProduitTo } from './produit-to';
import { ProduitsTo } from './produits-to';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  client: string = "client";

  panier: Facture; //panier pour interagir avec le client
  produits : ProduitsTo = new ProduitsTo; //panier a anvoyer a back

  constructor(private http:HttpClient) { }

  addLigne(ligne: Ligne) {
    this.panier.lignes.push(ligne);
    this.panier.total+=ligne.prix;
  }

  getTotal() : number{
    return this.panier.total;
  }

  sendCommande(){
    this.produits.Client.mail = this.client;
    this.panier.lignes.forEach(element => {
      let produitTo = new ProduitTo();
      produitTo.reference = element.art.reference;
      produitTo.quantite = element.nb;
      produitTo.taille = element.taille;
      this.produits.Produits.push(produitTo);
    });
    this.produits.Total = this.getTotal();
    console.log(this.produits);
  }
    
}
