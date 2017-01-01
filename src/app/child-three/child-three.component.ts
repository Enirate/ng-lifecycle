import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

babaNla:string;
  constructor() { }

  ngOnInit() {
    this.babaNla = 'Agba Baba';
  }

}
