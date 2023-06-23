import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../services/userdata.service'
@Component({
  selector: 'app-usignup',
  templateUrl: './usignup.component.html',
  styleUrls: ['./usignup.component.css']
})

export class UsignupComponent implements OnInit {
  
  usignup:string='assets/images/signup.jpg'
  
  signUpForm: FormGroup;
  isSubmit: boolean=true;
  submitMessage = '';

  
  constructor(private _router: Router , private http:HttpClient , private userdataService:UserdataService){

  }
 ngOnInit() {

    this.signUpForm = new FormGroup({
    
      firstName : new FormControl(null ,[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z \-\']+'),this.noSpaceAllowed]),
      lastName : new FormControl(null ,[Validators.required,,Validators.pattern('^[a-zA-Z \-\']+') ,this.noSpaceAllowed]),
      dob: new FormControl(null , Validators.required),
      mobile: new FormControl(null ,[Validators.required , this.noSpaceAllowed ,Validators.minLength(10) ,Validators.maxLength(10)]),
      emailAddress: new FormControl(null ,[Validators.required, this.noSpaceAllowed, Validators.email]),
      password: new FormControl(null ,[Validators.required ,this.noSpaceAllowed, Validators.minLength(8)]),
      gender : new FormControl(null , [Validators.required] ),
      address: new FormControl(null ,[Validators.required , Validators.minLength(10)]),
      pincode: new FormControl(null,[Validators.required ,this.noSpaceAllowed, Validators.minLength(6) ,Validators.maxLength(6)]),
      state: new FormControl(null , Validators.required),
      city: new FormControl(null , Validators.required)
  });
  
  }

  navigateToLogin(){
    this._router.navigate(['login'])
  }

  noSpaceAllowed(control : FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1){
      return {noSpaceAllowed : true}
    }
    return null;
}


  onSubmit(_signUpForm){
   
  console.log("Global SignUpForm before",this.signUpForm.value);
  console.log("Signform without ",_signUpForm);
  if(confirm('Do You Want to Submited?')) {
  this.userdataService.saveRegisteredData(_signUpForm).subscribe((result)=>{
  console.log("result of post api",result);
  
});
this.isSubmit = true;
this.submitMessage = "Submitted Successfully";
setTimeout(() => {
this.isSubmit=false;
},5000);

  }

if (this.signUpForm.valid) {
  console.log("Form Submitted!");
  this.signUpForm.reset();
}
// Show Message Form Submitted Successfully


    
}

OnlyNumbersAllowed(event):boolean{
  
  const charCode = (event.which)?event.which:event.keyCode;
  if(charCode>31 && (charCode < 48 || charCode > 57 ))
  {
    console.log('charCode restricted is'+ charCode);
    
    return false;
  }
  return true;

}

 
}
