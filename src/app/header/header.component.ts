import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logged:boolean = true;
  rechercher:string

deconnexion()
{
  this.logged = !this.logged
  this.router.navigate(['about']);
}

filterBy(filtre:string)
{
  
}

search()
{
  console.log(this.rechercher)
}

}
