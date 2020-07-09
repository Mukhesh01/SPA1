import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
public name='mukesh';
public greeting="";
  constructor() { }

  ngOnInit() {
    
  }
  onclick(event){
    //console.log('welcome mukhesh');
    console.log(event);
    //this.greeting='welcome mukesh';
    this.greeting=event.type;
  }
}
