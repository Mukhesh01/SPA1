import { Component, OnInit } from '@angular/core';
import { MyservicService } from "../myservic.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import confirmvalidator file
import { ConfirmedValidator } from '../confirmed.validator';
import { from } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateobj={personname:null};
  updatestatus="";
  bool:boolean=false;
registerForm : FormGroup;
submitted = false;

  constructor(private formBuilder:FormBuilder,private my:MyservicService) { }
  
  update_personname()
  {
    this.bool=true;
    console.log(this.updateobj);
    this.my.updatevalue(this.updateobj.personname).subscribe((output:any)=>
    {
      console.log(output);
      if(output.status==1)
      {
        this.updatestatus=output.message;
        console.log(this.updateobj);
      }
      else
      {
        this.updatestatus=output.message;
        
      }
    });
    
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      //firstName: ['', Validators.compose([Validators.required,Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
      //lastName: ['',Validators.required],
      //email: ['',[Validators.required,Validators.email]],
      //password: ['',[Validators.required,Validators.minLength(6)]]
     
    
     //updatevalue:['',[Validators.required,Validators.pattern('^[a-z0-9_-]{8,15}$')]],
     updatevalue:['',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],

     // zipcode validate
     //zipcode:['',[Validators.required,Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')]],

     // phone number validate
     // phonenumber:['',[Validators.required,Validators.pattern("^[+ 0-9]{10}$")]],

     // email validate
    // email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
     
    //password validate
     //password:['',[Validators.required]],

       //confirm_password validate
       //confirm_password:['',[Validators.required]]
    //},{
      //validators:ConfirmedValidator('password','confirm_password')
    });
  }

  onSubmit(){
    this.submitted = true;

    // stop the process here if form is invalid
    if(this.registerForm.invalid)
    {
      return;
    }
    alert('SUCCESS!');
  }
  

}
