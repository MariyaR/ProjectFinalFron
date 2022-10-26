import { Component, OnInit } from '@angular/core';
import { Ligne } from '../ligne';
import { PanierService } from '../panier.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-ficheproduit',
  templateUrl: './ficheproduit.component.html',
  styleUrls: ['./ficheproduit.component.css']
})
export class FicheproduitComponent implements OnInit {

  constructor(private srvpan : PanierService) { }

  p:Produit = JSON.parse(sessionStorage.getItem("produit"));
  x:any

  ngOnInit(): void {
    console.log(this.p)
  }

  addToCart(pr: Produit, nb: any, taille : string){
    console.log(taille);
    let ligne = new Ligne();
    ligne.art=pr;
    ligne.nb=nb;
    ligne.taille=taille;
    ligne.setPrix();
    this.srvpan.addLigne(ligne);
  }

}
