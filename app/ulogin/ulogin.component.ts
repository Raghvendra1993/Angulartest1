import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
  
  ulogin:string='assets/images/login_background.jpg'
  constructor(){

  }
  ngOnInit(): void {
    
  }

}
