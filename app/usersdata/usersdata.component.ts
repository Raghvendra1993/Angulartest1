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

  userData$:Observable<any>
  constructor(private userdataService:UserdataService){

    this.userData$ = this.userdataService.getUserData();
     
// using Subscribe

    //  this.userdataService.getUserData().subscribe(data => {
    //   console.log(data);
      
    //   this.userData = data;

    // })
    
    
  }

}
