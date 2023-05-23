import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutimg:string = 'assets/images/about_img.jpg'


  constructor(){}

  ngOnInit(){}

}
