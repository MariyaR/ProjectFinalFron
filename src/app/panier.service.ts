import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from './facture';
import { Ligne } from './ligne';
import { ProduitTo } from './produit-to';
import { ProduitsTo } from './produits-to';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  client: string = "2";

  panier: Facture = new Facture(); //panier pour interagir avec le client
  produits : ProduitsTo = new ProduitsTo; //panier a anvoyer a back
  message:string;

  constructor(private http:HttpClient, private router:Router) { }

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
    //this.produits.client.id = this.client;
    this.produits.client.id = JSON.parse(sessionStorage.getItem("client")).id;
    console.log(this.produits.client.id);
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
    this.http.post("http://localhost:8080/commandes", this.produits, {responseType: 'text'}).toPromise().then(res => {
      this.message =res;
      console.log("res");
      sessionStorage.setItem("commandeId", res);
      console.log(sessionStorage.getItem("commandeId"));
      this.router.navigate(['commandeValidation']);
      sessionStorage.setItem("panier", JSON.stringify(new Facture()));
      return this.message;

    })
   .catch();
   console.log("response from server");
   console.log(this.message);
  }

    
}
