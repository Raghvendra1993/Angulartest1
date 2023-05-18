import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() SidebarStatus:boolean = false ;

  list = [
    {
      number:1 ,
      name:'home' ,
      icon: 'fa-solid fa-house' 
    },
    {
      number:2 ,
      name:'analytics' ,
      icon: 'fa-solid fa-chart-line' 
    },
    {
      number:3 ,
      name:'products' ,
      icon: 'fa-solid fa-box' 
    },
    {
      number:4 ,
      name:'order' ,
      icon: 'fa-solid fa-chart-shopping' 
    },
    {
      number: 5,
      name:'setting' ,
      icon: 'fa-solid fa-gear' 
    },
    {
      number: 6,
      name:'about' ,
      icon: 'fa-solid fa-circle-info' 
    },
    {
      number: 7,
      name:'contact' ,
      icon: 'fa-solid fa-phone' 
    },
  ]

  constructor(){}
  ngOnInit(): void {
    
  }

}
