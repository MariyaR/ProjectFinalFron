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
    this.srv.getlist().then(x=>this.MyList = x);
    let pr = new Produit;
    pr.reference = 1000;
    pr.prix = 20;
    pr.description = "test produit";
    pr.images = ["Jack-BensonCherry2.png"];
    pr.marque = "marque";
    this.produits.push(pr);

  }

  addToCart(){

  }

}
