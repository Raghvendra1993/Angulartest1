import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  signUpForm:any
  constructor(private http:HttpClient) { }

 
saveRegisteredData(body: any){
  return this.http.post("https://angulardemoproject-2de3d-default-rtdb.firebaseio.com/registeredUser/user.json", body);
  
}

fetchUsersData(){
 return this.http.get("https://angulardemoproject-2de3d-default-rtdb.firebaseio.com/registeredUser/user.json");
  
  
  
}


deleteUsersData(userId){
 return this.http.delete("https://angulardemoproject-2de3d-default-rtdb.firebaseio.com/registeredUser/user/"+userId+".json");
}

getUsersDataById(userId:any){
 return this.http.get("https://angulardemoproject-2de3d-default-rtdb.firebaseio.com/registeredUser/user/"+userId+".json");
}

updateUsersData(userId,body){
 return this.http.put("https://angulardemoproject-2de3d-default-rtdb.firebaseio.com/registeredUser/user/"+userId+".json" ,body);

}

}
  
