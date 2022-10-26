import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merci-page',
  templateUrl: './merci-page.component.html',
  styleUrls: ['./merci-page.component.css']
})
export class MerciPageComponent implements OnInit {

  commandeId:string;
  constructor() { }

  ngOnInit(): void {
    console.log("merci page, id:");
    console.log(sessionStorage.getItem("commandeId"));
    this.commandeId = sessionStorage.getItem("commandeId");
  }

}
