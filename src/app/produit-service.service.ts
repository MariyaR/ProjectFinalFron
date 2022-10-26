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


getlist()
{
 return this.http.get("http://localhost:8080/produits").toPromise().then(res => {
    this.produits =res;
    console.log("in produit service");
    console.log("products: " + this.produits[0]["tailles"][0]["tailleId"]["taille"])
   return this.produits;
    // code here is executed on success
  })
 .catch();
}
}
