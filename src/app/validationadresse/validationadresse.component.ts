import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Adresse } from '../adresse';
import { Client } from '../client';
import { Facture } from '../facture';
import { LoginService } from '../login.service';
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
  globalLogged : Observable<string>;
  lgd:string;

  constructor(private srvPan: PanierService, private router:Router, private srvLogin : LoginService) { }

  ngOnInit(): void {

    this.globalLogged = this.srvLogin.getMyGV(); 
    this.globalLogged.subscribe(x => this.lgd = x);
    this.client=JSON.parse(sessionStorage.getItem("client"))
    this.panier = JSON.parse(sessionStorage.getItem("panier"));
    console.log(this.panier)
  }

  validate()
  {
    this.logged = sessionStorage.getItem("logged");
    if(this.lgd == String(true)) {
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
