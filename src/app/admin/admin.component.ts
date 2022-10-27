import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   client = new Array<Client>;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<Client>>("http://localhost:8080/client").subscribe(
    
      (response) => {
        this.client=response;
        console.log(response);
      },
     (err) => {  
      },
      () => {
      }
    );
  }


// formulaire
//addClient: Client={}
editUser?: Client;
// selected  
showUser?: Client;

// Modal
modalClosed = true;

save() {
  //let c = { ...this.addClient }; // copie du formulaire

 // this.client.push(c); // ajout dans la liste

  //this.addClient = {};
}

deleteAll() {
  this.client = [];
}

usersEmpty() {
  return this.client.length == 0;
}

edit(i: any) {
  this.editUser = this.client[i];
  this.modalClosed = false;
}

show(i:any) {
  this.showUser = this.client[i];
}

closeModal() {
  this.modalClosed = true;
}
}
