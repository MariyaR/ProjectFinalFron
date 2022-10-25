import { Component, OnInit } from '@angular/core';
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

  constructor(private srvPan: PanierService) { }

  ngOnInit(): void {
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
    this.total = this.panier.total;
    console.log("I am panier component, here is panier:");
    console.log(this.panier)
  }

  plus(i: number){
    console.log(this.panier.lignes[i].nb)
    let x = Number(this.panier.lignes[i].nb);
    this.panier.lignes[i].nb = x+1;
    this.panier.lignes[i].setPrix;
    this.panier.total+=this.panier.lignes[i].art.prix;
    this.total = this.panier.total;
  }

  minus(i: number){
    let x = Number(this.panier.lignes[i].nb);
    this.panier.lignes[i].nb = x-1;
    this.panier.lignes[i].setPrix;
    this.panier.total-=this.panier.lignes[i].art.prix;
    this.total = this.panier.total;
  }

  delete(i: number){
    let delPr = this.panier.lignes[i].prix;
    this.panier.lignes.splice(i);
    this.panier.total-=delPr;
    this.total = this.panier.total;
  }

  validate(){
    //envoyer la request de validation
    this.srvPan.sendCommande();
  }

}
