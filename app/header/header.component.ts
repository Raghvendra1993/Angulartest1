import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  constructor(){ }
  navbarfixed : boolean = false;
  
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.screenY > 100){
      this.navbarfixed = true
    }
    else{
      this.navbarfixed = false
    }
  }


  


  ngOnInit(): void {
    
  }

  // SidebarToggle(){
  //   this.menuStatus = !this.menuStaus;
  //   this.SidebarToggle.emit(this.manuStatus)
  // }

}
