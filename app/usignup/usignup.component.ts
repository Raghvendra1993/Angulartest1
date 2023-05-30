import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usignup',
  templateUrl: './usignup.component.html',
  styleUrls: ['./usignup.component.css']
})

export class UsignupComponent implements OnInit {
  
  usignup:string='assets/images/signup.jpg'
  
  reactiveForm: FormGroup;
  
  
  
  constructor(private _router: Router){

  }
  
  
  
  ngOnInit() {

    this.reactiveForm = new FormGroup({
    
      firstName : new FormControl(null ,Validators.required),
      lastName : new FormControl(null ,Validators.required),
      dob: new FormControl(null , Validators.required),
      mobile: new FormControl(null ,[Validators.required ,Validators.minLength(10) ,Validators.maxLength(10)]),
      emailAddress: new FormControl(null ,[Validators.required, Validators.email]),
      password: new FormControl(null ,[Validators.required , Validators.minLength(8)]),
      
      gender : new FormControl(null , [Validators.required] ),
      address: new FormControl(null ,Validators.required),
      pincode: new FormControl(null,[Validators.required , Validators.minLength(6) ,Validators.maxLength(6)]),
      state: new FormControl(null , Validators.required),
      city: new FormControl(null , Validators.required)
  });
    
  }


  navigateToLogin(){
    this._router.navigate(['login'])
  }

  onSubmit(){
    console.log(this.reactiveForm.value);
    
  }

}
