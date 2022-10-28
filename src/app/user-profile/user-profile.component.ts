import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Commande } from '../commande';
import { ProduitsTo } from '../produits-to';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.client=JSON.parse(sessionStorage.getItem("client"));

    const body = JSON.stringify(this.client);

    
    this.http.post("http://localhost:8080/commandes/client",body,{
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      }), responseType:"json"
    }).subscribe(response =>{
      this.commandes=response;
    },
    err =>{
    }) 


  }

  showInfo:boolean = true;
  showComm:boolean = false;
  client:Client;
  modalInfoClosed = true;
  modalCommClosed = true;
  commandes:any;
  commande:ProduitsTo;

showInformation()
{
  this.showComm=false;
  this.showInfo=true;
}

showCommandes()
{
  this.showComm=true;
  this.showInfo=false;
}

modifier()
  {
    this.modalInfoClosed=false;
  }

  closeModal() {
    this.modalInfoClosed = true;
    this.modalCommClosed = true;
    this.client=JSON.parse(sessionStorage.getItem("client"));
  }

  commandesEmpty()
  {
    return this.commandes.length>0;
  }

  showDetail(i:number)
  {
    this.commande=this.commandes[i];
    this.modalCommClosed = false;
  }

}
