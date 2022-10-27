import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adresse } from '../adresse';
import { Client } from '../client';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent implements OnInit {

  client:Client=new Client();
  adresse:Adresse=new Adresse();
  utilisateur:Utilisateur = new Utilisateur();
  message:string;
  erreur:boolean=false;
  editForm: FormGroup;

  @Output() afterSubmit = new EventEmitter<VoidFunction>();

  constructor(private fb: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.client=JSON.parse(sessionStorage.getItem("client"))
    this.adresse=this.client.adresse;

    this.editForm = this.fb.group({
      nom: [this.client.nom, [Validators.required]],
      prenom: [this.client.prenom, [Validators.required]],
      telephone: [this.client.telephone],
      num_rue: [this.adresse.num_rue, [Validators.required]],
      rue: [this.adresse.rue, [Validators.required]],
      cp: [this.adresse.cp, [Validators.min(1000), Validators.max(99999), Validators.required]],
      ville: [this.adresse.ville, [Validators.required]],

    });
  }

  register() {
    this.adresse.num_rue = this.editForm.get('num_rue').value;
    this.adresse.rue = this.editForm.get('rue').value;
    this.adresse.cp = this.editForm.get('cp').value;
    this.adresse.ville = this.editForm.get('ville').value;

    this.client.nom = this.editForm.get('nom').value;
    this.client.prenom = this.editForm.get('prenom').value;
    this.client.telephone = this.editForm.get('telephone').value;
    this.client.adresse = this.adresse;

    const body = JSON.stringify(this.client);
    
    this.http.put("http://localhost:8080/client",body,{
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      }), responseType:"json"
    }).subscribe(response =>{
      sessionStorage.setItem("client",JSON.stringify(response));
      this.afterSubmit.emit();
      location.reload();
    },
    err =>{
      this.erreur =true
      this.message="Erreur"
    }) 
}

}
