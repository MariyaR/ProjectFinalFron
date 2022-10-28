import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse } from '../adresse';
import { Client } from '../client';
import { Facture } from '../facture';
import { PanierService } from '../panier.service';

@Component({
  selector: 'app-validationadresse',
  templateUrl: './validationadresse.component.html',
  styleUrls: ['./validationadresse.component.css']
})
export class ValidationadresseComponent implements OnInit {

  adresse:Adresse = new Adresse ();
  client:Client = new Client();
  logged:string;
  panier : Facture;
  modalClosed = true;

  constructor(private srvPan: PanierService, private router:Router) { }

  ngOnInit(): void {
    if(JSON.parse(sessionStorage.getItem("logged")) === false)
      this.router.navigate(['about']);
    this.client=JSON.parse(sessionStorage.getItem("client"))
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
    console.log(this.panier)
  }

  validate()
  {
    this.logged = sessionStorage.getItem("logged");
    if(this.logged == String(true)) {
      this.srvPan.sendCommande();
    }
  }

  modifier()
  {
    this.modalClosed=false;
    
  }

  closeModal() {
    this.modalClosed = true;
    this.client=JSON.parse(sessionStorage.getItem("client"));
  }

}
