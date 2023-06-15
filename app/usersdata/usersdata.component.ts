import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { Observable ,map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css']
})
export class UsersdataComponent implements OnInit{

  isFetching:boolean = false;
  allUsersData:any;

  usersData$:Observable<any>
  constructor(private http:HttpClient, private userdataService:UserdataService){
   
  this.isFetching = true
  this.userdataService.fetchUsersData().pipe(map((user) =>{
    const regUsers = [];
    for(const key in user){
      if(user.hasOwnProperty(key)){
        regUsers.push({...user[key],id :key})
      }
      }
      return regUsers;
  })).subscribe((regUsers) => {
  console.log("User",regUsers);
  this.allUsersData = regUsers

  })
  }  

onDeletedata(id:string){
  this.userdataService.deleteUsersData(id);
}

    
 


  ngOnInit() {
    
  }

}
