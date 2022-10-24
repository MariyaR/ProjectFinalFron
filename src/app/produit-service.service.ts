import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  produits:any;
  constructor(private http : HttpClient ) { 
  }

  getInfo()
  {
    this.http.get("http://localhost:8080/produits").subscribe(
      response => {
      
       
        sessionStorage.setItem("lst",JSON.stringify(response));
      }
      ,
      err => {
        console.log("*************KO")
        
      }


    );

  }
}
