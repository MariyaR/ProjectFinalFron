import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../client';
import { LoginService } from '../login.service';
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
  logged:boolean = false;
  globalLogged : Observable<string>;


  constructor(private http : HttpClient, private router:Router, private srvLogin : LoginService) { }

  ngOnInit(): void {
    this.globalLogged = this.srvLogin.getMyGV(); 
  }

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
      this.srvLogin.setMyGV("true");
      console.log("after changing global logged");
      console.log(this.srvLogin.getMyGV());
      sessionStorage.setItem("logged",JSON.stringify(this.logged));
      console.log(sessionStorage.getItem("logged"));
      this.router.navigate(['about']);
    },
      err => {
        this.erreur = true
        this.message="Erreur d'authentification : " + err.error.message;
      })
     /* this.srvLogin.connexion();
      this.utilisateur = this.srvLogin.utilisateur;
      this.message = this.srvLogin.message;
      this.erreur = this.srvLogin.erreur;
      this.logged = this.srvLogin.logged;*/
  }

}
