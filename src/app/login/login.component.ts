import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utilisateur:Utilisateur = new Utilisateur();
  message:string;
  erreur:boolean = false;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  connexion()
  {
    const body = JSON.stringify(this.utilisateur)
    this.http.post("http://localhost:8080/utilisateur/connexion",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }), responseType: "json"
    }).subscribe(response => {
      this.message="Authentification valide"
      sessionStorage.setItem("client",JSON.stringify(response));
    },
      err => {
        this.erreur = true
        this.message="Erreur d'authentification : " + err.error.message;
      })
  }

}
