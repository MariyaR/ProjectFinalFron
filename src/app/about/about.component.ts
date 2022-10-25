import { Component, OnInit } from '@angular/core';
import { Facture } from '../facture';
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
  tailles = [];
  
  MyList: any;
  constructor(private srvPr: ProduitServiceService, private srvPan : PanierService) { }

  ngOnInit(): void {
    this.panier = new Facture; //a supprimer
    sessionStorage.setItem("panier",JSON.stringify(this.panier)); // a bougher a component login ou logged user

    //this.srvPr.getInfo();
    //this.produits = JSON.parse(sessionStorage.getItem("lst"));
    this.srvPr.getlist().then(x=>this.produits= x);
    console.log(this.produits);
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
    


    //this.srv.getlist().then(x=>this.produits= x);

  }

  addToCart(pr: Produit, i : number, nb: any, taille : any){
    console.log(pr);
    console.log(i);
    console.log(nb);
    console.log(taille);
  }

}
