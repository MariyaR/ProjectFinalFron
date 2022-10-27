import { Component, Input, OnInit } from '@angular/core';
import { Commande } from '../commande';
import { ProduitTo } from '../produit-to';
import { ProduitsTo } from '../produits-to';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() commande: ProduitsTo;

  constructor() { }

  ngOnInit(): void {
    console.log(this.commande)
  }

}
