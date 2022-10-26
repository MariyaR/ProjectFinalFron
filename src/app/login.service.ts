import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  utilisateur:Utilisateur = new Utilisateur();
  message:string;
  erreur:boolean = false;
  logged:boolean = false;


  constructor(private http : HttpClient, private router:Router) { }

  connexion()
  {
    const body = JSON.stringify(this.utilisateur)
    this.http.post("http://localhost:8080/utilisateur/connexion",body,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }), responseType: "json"
    }).subscribe(response => {
      this.erreur=false;
      this.message="Authentification valide"
      sessionStorage.setItem("client",JSON.stringify(response));
      this.logged=true;
      sessionStorage.setItem("logged",JSON.stringify(this.logged));
      console.log(sessionStorage.getItem("logged"));
      this.router.navigate(['about']);
    },
      err => {
        this.erreur = true
        this.message="Erreur d'authentification : " + err.error.message;
      })
  }
}
