import { Component, OnInit } from '@angular/core';
import { Facture } from '../facture';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  panier : Facture;

  constructor() { }

  ngOnInit(): void {
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
  }

}
