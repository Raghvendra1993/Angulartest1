import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  signUpForm:any

  constructor(private http:HttpClient ) { }

 saveUsersData(){
    console.log(this.signUpForm.value);
    const headers = new HttpHeaders();
    this.http.post<{name:string}>(
     'https://angularpro1-26ac2-default-rtdb.firebaseio.com/userdata.json',
     this.signUpForm,{headers:headers}).subscribe((signUpForm) =>{
      console.log(signUpForm);
      
     });
    
 }
 fetchUsersData(){

 }
 deleteUsersData(){

 }
 deleteAllUsersData(){

 }

  
}
