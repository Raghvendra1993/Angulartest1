import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
import { UsignupComponent } from '../usignup/usignup.component';
// import { UserPipe } from '../pipes/user.pipe';


@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css']
})
export class UsersdataComponent implements OnInit{
  [x: string]: any;

  isFetching:boolean = true;
  allUsersData:any;
  userId:string;

  
  constructor(private http:HttpClient, private userdataService:UserdataService){}


  onFetchData(){
    this.isFetching = true;
    this.userdataService.fetchUsersData().pipe(map((user) =>{
      const regUsers = [];
      for(const key in user){
        if(user.hasOwnProperty(key)){
          regUsers.push({userId :key,...user[key]})
        } 
        }
        return regUsers;
    })).subscribe((regUsers) => {
    console.log("User",regUsers);
    this.allUsersData = regUsers

  })

}


  onEditData(userId ,index){
    console.log(this.allUsersData[index]);
    this['router'].navigate(['signUp'])
  
    

  }

  onDeleteData(userId){
    if(confirm('Do You Want to Delete This user?')){
      console.log(userId);
      this.http.delete("https://angulardemoproject-2de3d-default-rtdb.firebaseio.com/registeredUser/user/"+userId+".json")
      .subscribe(() =>{
        this.onFetchData();})
      // this.userdataService.deleteUsersData(userId).subscribe(() =>{
      //   this.onFetchData()

      // })
    }

  }


  ngOnInit() {
    
  }

}
