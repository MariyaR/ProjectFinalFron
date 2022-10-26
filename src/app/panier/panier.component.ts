import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from '../facture';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  panier : Facture;
  total: number;

  constructor(private srvPan: PanierService, private router:Router) { }

  ngOnInit(): void {
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
    this.total = this.panier.total;
    console.log("I am panier component, here is panier:");
    console.log(this.panier)
  }

  plus(i: number){
    let x = Number(this.panier.lignes[i].nb);
    this.panier.lignes[i].nb = x+1;
    let prixTotal = Number(this.panier.lignes[i].prix);
    this.panier.lignes[i].prix = prixTotal + Number(this.panier.lignes[i].art.prix);
    this.panier.total+=this.panier.lignes[i].art.prix;
    this.total = this.panier.total;
    console.log(this.panier)
    sessionStorage.setItem("panier", JSON.stringify(this.panier));
  }

  minus(i: number){
    let x = Number(this.panier.lignes[i].nb);
    this.panier.lignes[i].nb = x-1;
    if(this.panier.lignes[i].nb > 0 ) {
      let prixTotal = Number(this.panier.lignes[i].prix);
      this.panier.lignes[i].prix = prixTotal - Number(this.panier.lignes[i].art.prix);
      this.panier.total-=this.panier.lignes[i].art.prix;
      this.total = this.panier.total;
      sessionStorage.setItem("panier", JSON.stringify(this.panier));
    }
    else {
      this.delete(i);}
  }

  delete(i: number){
    let delPr = this.panier.lignes[i].prix;
    this.panier.lignes.splice(i,1);
    this.panier.total-=delPr;
    this.total = this.panier.total;
    sessionStorage.setItem("panier", JSON.stringify(this.panier));
  }

  validate(){
    //envoyer la request de validation
    this.srvPan.sendCommande();
    this.panier = JSON.parse(sessionStorage.getItem("panier"));

  }

}
