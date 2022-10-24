import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {

  produits:any;
  constructor(private http : HttpClient ) { 
  }

  getlist()
  {
   return this.http.get("http://localhost:8081/produit").toPromise().then(res => {
      this.produits =res;
     return this.produits;
      // code here is executed on success
    })
   .catch();
  }
}
