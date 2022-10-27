import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private http : HttpClient, private srvLogin : LoginService) { }
  logged:boolean = false;
  lgd:string = "false";
  globalLogged : Observable<string>;

  ngOnInit(): void {
    this.globalLogged = this.srvLogin.getMyGV(); 
    this.logged=JSON.parse(sessionStorage.getItem("logged"));
    this.globalLogged.subscribe(x => this.lgd = x);
    this.http.get<Array<string>>("http://localhost:8080/produits/categories").subscribe(
      (response) => {
        this.categorie=response;
      },
     (err) => {  
      },
      () => {
      }
    );
  }

  rechercher:string
  categorie : Array<string>;

deconnexion()
{
  this.logged = !this.logged
  sessionStorage.setItem("logged",JSON.stringify(this.logged));
  this.router.navigate(['about']);
}

connexion()
{
  this.router.navigate(['login']);
}

filterBy(filtre:string)
{
  
}

search()
{
  console.log(this.rechercher)
}

}
