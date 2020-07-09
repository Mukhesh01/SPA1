import { Component, OnInit } from '@angular/core';
import { MyservicService } from "../myservic.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
registerForm : FormGroup;
submitted = false;

  constructor(private formBuilder:FormBuilder,my:MyservicService) { }
  
  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      //lastName: ['',Validators.required],
      //email:['',[Validators.required,Validators.email]],
      //password:['',[Validators.required,Validators.minLength(6)]]
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
