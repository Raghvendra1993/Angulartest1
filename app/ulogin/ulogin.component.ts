import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
  



  
  ulogin:string='assets/images/login_background.jpg'
  constructor(private _router: Router){

  }

  
  ngOnInit(): void {
    
  }
  login(){
    // this.loginData.push(this.loginObj);
    // localStorage.getItem('signUpData',JSON.stringify(this.signUpData))
    // this.loginObj = {
    //   email:'',
    //   password:''
    // };
  }

  navigateToRegister() {
    this._router.navigate(['signUp'])
  }
}
