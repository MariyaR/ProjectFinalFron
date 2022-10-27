import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public globalLogged$ = new BehaviorSubject<string>("false");

  constructor(private http : HttpClient, private router:Router) { 
  }

  setMyGV(val : string){
    this.globalLogged$.next(val);
  }
  
  getMyGV(){
    return this.globalLogged$.asObservable();
  }

}
