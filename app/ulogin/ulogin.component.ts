import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
 
  loginForm : FormGroup;
  

  ulogin:string='assets/images/login_background.jpg'
  constructor(private _router: Router){

  }

  
  ngOnInit() {
    this.loginForm = new FormGroup({
      emailAddress: new FormControl(null ,[Validators.required, this.noSpaceAllowed, Validators.email]),
      password: new FormControl(null ,[Validators.required ,this.noSpaceAllowed, Validators.minLength(8)]) 
    });
    
  }
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      const email = this.loginForm.value.emailAddress;
      const pass = this.loginForm.value.password;
    }
    else{
      
    }
    
    // localStorage.setItem('LoginFormData',JSON.stringify(this.loginForm))
    
    
  }

  navigateToShowUserData(){
    this._router.navigate(['usersdata'])
  }

  noSpaceAllowed(control : FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed : true}
    }
    return null;
}


  navigateToRegister() {
    this._router.navigate(['signUp'])
  }
}
