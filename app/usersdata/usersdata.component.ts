import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { UserPipe } from '../pipes/user.pipe';


@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css']
})
export class UsersdataComponent implements OnInit{

  isFetching:boolean = false;
  allUsersData:any;
  id:string;

  
  constructor(private http:HttpClient, private userdataService:UserdataService){}


  onFetchData(){
    this.isFetching = true;
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

  onDeleteData(id:string){
    // this.userdataService.deleteUsersData(id).subscribe(()=>{})
    
  } 



onEditData(id:string){

}

    
 


  ngOnInit() {
    
  }

}
