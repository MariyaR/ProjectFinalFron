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
  client: string = "1";

  panier: Facture = new Facture(); //panier pour interagir avec le client
  produits : ProduitsTo = new ProduitsTo; //panier a anvoyer a back
  message;

  constructor(private http:HttpClient) { }

  addLigne(ligne: Ligne) {
    console.log("add to panier function, panier:");
    console.log(this.panier);
    this.panier.lignes.push(ligne);
    this.panier.total+=ligne.prix;
    sessionStorage.setItem("panier", JSON.stringify(this.panier));
  }

  getTotal() : number{
    return this.panier.total;
  }

  sendCommande(){
    this.produits.client.id = this.client;
    this.panier.lignes.forEach(element => {
      let produitTo = new ProduitTo();
      produitTo.produit = element.art;
      produitTo.quantite = element.nb;
      produitTo.taille = "L";
      this.produits.produits.push(produitTo);
    });
    this.produits.total = this.getTotal();
    console.log("I am panierSerive, ready to send to back this:")
    console.log(this.produits)
    console.log(JSON.stringify(this.produits));
    this.http.post("http://localhost:8080/commandes", this.produits).toPromise().then(res => {
      this.message =res;
      //redirect to thank you page
     return this.message;
      // code here is executed on success
      //redirect to the panier
    })
   .catch();
   console.log("response from server");
   console.log(this.message);
  }
    
}
