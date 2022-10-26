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
  }

}
