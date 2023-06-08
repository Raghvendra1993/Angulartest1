import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-usignup',
  templateUrl: './usignup.component.html',
  styleUrls: ['./usignup.component.css']
})

export class UsignupComponent implements OnInit {
  
  usignup:string='assets/images/signup.jpg'
  
  signUpForm: FormGroup;
  
  constructor(private _router: Router , private http:HttpClient , private userdataService:UserdataService){

  }
 ngOnInit() {

    this.signUpForm = new FormGroup({
    
      firstName : new FormControl(null ,[Validators.required,this.noSpaceAllowed]),
      lastName : new FormControl(null ,[Validators.required ,this.noSpaceAllowed]),
      dob: new FormControl(null , Validators.required),
      mobile: new FormControl(null ,[Validators.required , this.noSpaceAllowed ,Validators.minLength(10) ,Validators.maxLength(10)]),
      emailAddress: new FormControl(null ,[Validators.required, this.noSpaceAllowed, Validators.email]),
      password: new FormControl(null ,[Validators.required ,this.noSpaceAllowed, Validators.minLength(8)]),
      gender : new FormControl(null , [Validators.required] ),
      address: new FormControl(null ,Validators.required),
      pincode: new FormControl(null,[Validators.required ,this.noSpaceAllowed, Validators.minLength(6) ,Validators.maxLength(6)]),
      state: new FormControl(null , Validators.required),
      city: new FormControl(null , Validators.required)
  });
  
  }

  navigateToLogin(){
    this._router.navigate(['login'])
  }

  noSpaceAllowed(control : FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed : true}
    }
    return null;
}


  onSubmit(){
    

      console.log(this.signUpForm.value);

    // this.signUpForm.reset({
    //   firstName:'',
    //   lastName:'',
    //   dob:'',
    //   emailAddress:'',
    //   mobile:'',
    //   password:'',
    //   address:'',
    //   pincode:'',
    //   gender:'',
    //   state:'',
    //   city:''
    // })

    
  }

onSaveUsersData(){
  this.userdataService.saveUsersData()
}
 
}
