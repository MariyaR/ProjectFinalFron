import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styleUrls: ['./personne-detail.component.css']
})
export class PersonneDetailComponent implements OnInit {
  @Input() user?:Client;

  constructor() { }

  ngOnInit(): void {
  }

}
