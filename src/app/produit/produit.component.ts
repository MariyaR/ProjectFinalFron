import { Component, Input, OnInit } from '@angular/core';
import { Commande } from '../commande';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() commande: Commande;

  constructor() { }

  ngOnInit(): void {
    console.log(this.commande)
  }

}
