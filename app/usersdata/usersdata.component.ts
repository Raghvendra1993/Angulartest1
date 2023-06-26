import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
// import { UserPipe } from '../pipes/user.pipe';


@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersdataComponent implements OnInit{
  [x: string]: any;

  isFetching:boolean = true;
  allUsersData:any;
  userId:string;

  
  constructor(private http:HttpClient, private userdataService:UserdataService , private router:Router){}

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
    // console.log("User",regUsers);
    this.allUsersData = regUsers
  })

}
  onDeleteData(userId){
    if(confirm('Do You Want to Delete This user?')){
      this.userdataService.deleteUsersData(userId)
      .subscribe(() =>{
        this.onFetchData();})
      }

  }

  onSignOut(){
    
  }


  ngOnInit() {
    
  }

}
