import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css']
})
export class UsersdataComponent {

  // userData:any =[];

  usersData$:Observable<any>
  constructor(private userdataService:UserdataService){

    this.usersData$ = this.userdataService.fetchUsersData();
    console.log(this.usersData$);
    
     
// using Subscribe

    //  this.userdataService.getUserData().subscribe(data => {
    //   console.log(data);
      
    //   this.userData = data;

    // })
    
    
  }

}
