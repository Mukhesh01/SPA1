import { Component, OnInit, Output } from '@angular/core';
import { MyservicService } from "../myservic.service";
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
tableobj=[];
bool:boolean=false;
updateobj={personname:null};
updatestatus="";
//form = new FormGroup({
  //updateValue:new FormControl('',Validators.required)
//})
// confirmationString:string="person updated";

  constructor(private my:MyservicService) { }

  ngOnInit() {
      this.getvalues();
  }
 getvalues()
 {
   this.bool=true;
   this.my.getvalue().subscribe((output:any)=>{
     this.tableobj=output;
     console.log(this.tableobj);
   });
 }

//////////// UPDATE

 // validate UPDATE


 update_personname()
 {
  this.bool=true;
  console.log(this.updateobj);
  this.my.updatevalue(this.updateobj.personname).subscribe((Output:any)=>
  {
    console.log(Output);
    if(Output.status==1)
    {
      this.updatestatus=Output.message;
      console.log(this.updateobj);
    }
      else
      {
        this.updatestatus=Output.message;
      }
  });
 }

  // validate UPDATE
 
  //onSubmit(){
    //alert(JSON.stringify(this.form.value));
  
 //}
}
