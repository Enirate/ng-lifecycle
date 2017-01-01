import { Component, OnInit, ContentChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import {ChildThreeComponent} from '../child-three/child-three.component'

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit, AfterContentInit,AfterContentChecked {

  @ContentChild(ChildThreeComponent) contentChild:ChildThreeComponent;
  
  testVal:any;

  constructor() { 
    //this.testVal = this.contentChild.babaNla;
  }

  ngOnInit() {
    //your logic here 
  }

  ngAfterContentInit() {
    console.log(this.contentChild.babaNla + 'init'); 
  }

  ngAfterContentChecked() {
   //console.log(this.contentChild.babaNla); 
   if(this.contentChild.babaNla != 'Agba Baba') 
   {
     console.log('No Baba')
   }
   else 
   {
     console.log('Baba dey')     
   }
  }



}
