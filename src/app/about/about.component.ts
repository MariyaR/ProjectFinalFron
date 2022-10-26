import { Component, OnInit } from '@angular/core';
import { Facture } from '../facture';
import { Ligne } from '../ligne';
import { PanierService } from '../panier.service';
import { Produit } from '../produit';
import { ProduitServiceService } from '../produit-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  produits:Array<any>=new Array<any>();
  panier : Facture;
  tailles : Array<any>=new Array<any>();
  x:string;
  
  MyList: any;
  constructor(private srvPr: ProduitServiceService, private srvPan : PanierService) { }

  ngOnInit(): void {
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
    //sessionStorage.setItem("panier",JSON.stringify(this.panier)); // a bougher a component login ou logged user

    //this.srvPr.getInfo();
    //this.produits = JSON.parse(sessionStorage.getItem("lst"));
    this.srvPr.getlist().then(x=>this.produits= x);
    console.log(this.produits);
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
    


    //this.srv.getlist().then(x=>this.produits= x);

  }

  addToCart(pr: Produit, i : number, nb: any, taille : string){
    console.log(pr);
    console.log(i);
    console.log(nb);
    console.log(JSON.stringify(this.x));

    let ligne = new Ligne();
    ligne.art = pr;
    ligne.nb = nb;
    ligne.setPrix();
    this.srvPan.addLigne(ligne);
    this.panier.total+=ligne.prix;
    console.log(sessionStorage.getItem("panier"))

    //this.srvPan.sendCommande(); // a supprimer apres integration avec back
  }

}
