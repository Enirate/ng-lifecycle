import { Component, OnInit, OnChanges, SimpleChanges, AfterViewChecked, AfterViewInit,ViewChild, ContentChild } from '@angular/core';
import { ChildTwoComponent } from './child-two/child-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  title = 'app works!';
  changer:string;
  lilView:any;
  checkThis:any = 'Anyday';
  baba:any ='baba omo de';

  @ViewChild(ChildTwoComponent) childTwo:ChildTwoComponent;
  //@ContentChild(ChildTwoComponent) contentChild:ChildTwoComponent;
  
constructor() {
    //this.lilView = this.childTwo.thisDay;  
}
  parentStatus:string = "Mavrodi";

  ngOnInit() {
    console.log("Component Initialized");
    //console.log(this.childTwo.thisDay); //will show undefined cos ViewChild component properties has not been intialized 
    //this.lilView = this.childTwo.thisDay;
  }


  ngAfterViewInit(){
    //alert("I have a new content one two");
    console.log(this.childTwo.thisDay); //will show monday because the component properties of ViewChild has been Initialized
    this.lilView = this.childTwo.thisDay;
  }

  ngAfterViewChecked() {
    if(this.checkThis === this.lilView) {
    console.log("it's one");
    }
  }
}
