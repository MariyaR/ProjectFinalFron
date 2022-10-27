import { Component, OnInit } from '@angular/core';
import { Adresse } from '../adresse';
import { Client } from '../client';

@Component({
  selector: 'app-validationadresse',
  templateUrl: './validationadresse.component.html',
  styleUrls: ['./validationadresse.component.css']
})
export class ValidationadresseComponent implements OnInit {

  adresse:Adresse = new Adresse ();
  client:Client = new Client();

  constructor() { }

  ngOnInit(): void {
    this.client=JSON.parse(sessionStorage.getItem("client"))
  }

  validate()
  {

  }

}
