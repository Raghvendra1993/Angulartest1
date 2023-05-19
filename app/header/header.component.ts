import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  @Output() sidebarToggled = new EventEmitter<boolean>();
  manuStatus:boolean = false

  constructor(){

  }
  ngOnInit(): void {
    
  }

  // SidebarToggle(){
  //   this.menuStatus = !this.menuStaus;
  //   this.SidebarToggle.emit(this.manuStatus)
  // }

}
