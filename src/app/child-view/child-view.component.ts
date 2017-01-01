import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.css']
})
export class ChildViewComponent implements OnInit, OnChanges, DoCheck {

  laStatus:string = "Eniola";

  @Input() status:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges) {
    let chng = JSON.stringify(changes);
    //alert("status changed");
    console.log(chng);
          
    for (let status in changes) //map each object in obj of obj
      {
      let chng = changes[status];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(prev);
      }
  }
  
  ngDoCheck() {
    if(this.status === this.laStatus) {
      alert("Same ni");
    }
  }

}
