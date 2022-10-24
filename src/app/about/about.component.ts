import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitServiceService } from '../produit-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  produits:Array<any>=new Array<any>();

  
  MyList: any;
  constructor(private srv: ProduitServiceService) { }

  ngOnInit(): void {
    
    let pr2 = new Produit;
    pr2.reference = 1000;
    pr2.prix = 20.50;
    pr2.description = "test produit";
    pr2.images = ["gulf super tee.png"];
    pr2.marque = "marque";
    this.produits.push(pr2);
    
    
    this.srv.getlist().then(x=>this.MyList = x);
    let pr = new Produit;
    pr.reference = 1000;
    pr.prix = 35.50;
    pr.description = "test produit";
    pr.images = ["Jack-BensonCherry2.png"];
    pr.marque = "marque";
    this.produits.push(pr);



  }

  addToCart(){

  }

}
