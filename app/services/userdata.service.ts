import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  signUpForm:any

  // const headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');

  constructor(private http:HttpClient) { }

 
saveRegisteredData(body: any){
  // console.log(this.signUpForm.value);


  // const body=JSON.stringify(person);
  // console.log(body)
  return this.http.post("https://angulardemoproject-2de3d-default-rtdb.firebaseio.com/registeredUser/user.json", body)

  // const headers = new HttpHeaders({'myHeaders':'testproject'});
  // this.http.post<{name:string}>('https://angulardemoproject-2de3d-default-rtdb.firebaseio.com/registeredUser/user.json',
  // this.signUpForm,{headers:headers})
  // .subscribe((res) =>{
  //   console.log(res);
    
  // });
  
}

fetchUsersData(){
  let apiurl = 'https://jsonplaceholder.typicode.com/users';
  console.log(apiurl);
  return this.http.get(apiurl)
  
  
}

deleteUsersData(){

}

  
}
