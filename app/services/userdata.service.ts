import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  // signUpForm:any

  constructor(private httpClient:HttpClient) { }

 

    //   return this.httpClient.post<boolean>(
    //   'https://api.restful-api.dev/objects/userdata.json', data).subscribe((signUpForm) =>{
    //   console.log(signUpForm);
    // });
    // const headers = new HttpHeaders({'myHeader':'demoproject'});
    // return this.httpClient.post<any>(
    // 'https://api.restful-api.dev/objects/userdata.json', signUpForm).subscribe((signUpForm) =>{
    //   console.log(signUpForm);
    // });
    
 

 
//  deleteUsersData(){

//  }
//  deleteAllUsersData(){

//  }
saveUserData(){
  
}


getUserData(){
  let apiurl = 'https://jsonplaceholder.typicode.com/users';
  return this.httpClient.get(apiurl)
}

  
}
