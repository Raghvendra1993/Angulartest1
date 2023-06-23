import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{

  isFetching:boolean = true;
  allUsersData:any;
  userId:string;
  isUpdate: boolean=true;
  updateMessage = '';
  updateUserForm = new FormGroup({
    firstName : new FormControl(),
      lastName : new FormControl(),
      dob: new FormControl(),
      mobile: new FormControl(),
      emailAddress: new FormControl(),
      password: new FormControl(),
      gender : new FormControl(),
      address: new FormControl(),
      pincode: new FormControl(),
      state: new FormControl(),
      city: new FormControl()
  });


  constructor(private http:HttpClient, private userdataService:UserdataService ,private router:ActivatedRoute){}



ngOnInit():void {
let userId = this.router.snapshot.params['userId'];
  // console.log("Url_Id",userId);
  
  alert('Do You Want to Edit?')
    this.userdataService.getUsersDataById(userId).subscribe((userdata:any) => {
      console.log(userdata); 
        this.updateUserForm = new FormGroup({
          firstName : new FormControl(userdata['firstName']),
            lastName : new FormControl(userdata['lastName']),
            dob: new FormControl(userdata['dob']),
            mobile: new FormControl(userdata['mobile']),
            emailAddress: new FormControl(userdata['emailAddress']),
            password: new FormControl(userdata['password']),
            gender : new FormControl(userdata['gender']),
            address: new FormControl(userdata['address']),
            pincode: new FormControl(userdata['pincode']),
            state: new FormControl(userdata['state']),
            city: new FormControl(userdata['city'])
        });
      
    })
 
  

  }
  updateUsersData(){
    let userId = this.router.snapshot.params['userId'];
    if(confirm('Do You Change Previous?')){
    this.userdataService.updateUsersData(userId,this.updateUserForm.value).subscribe((userdata) =>{
    console.log(userdata);
  
  });
this.isUpdate = true;
this.updateMessage = "Updated Successfully";
setTimeout(() => {
this.isUpdate=false;
},5000);

}

if (this.updateUserForm.valid) {
  console.log("Form Submitted!");
  this.updateUserForm.reset();
}
}
}
