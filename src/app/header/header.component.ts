import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
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
    this.globalLogged.subscribe(x => this.lgd = x);
    this.logged=JSON.parse(sessionStorage.getItem("logged"));

   
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
  sessionStorage.setItem("filtre", JSON.stringify(filtre+"S"))
  this.router.navigate(['about']);
}

search()
{
  console.log(this.rechercher)
}

}
