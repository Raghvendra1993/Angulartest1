import { Component, OnInit } from '@angular/core';
import { NewsserviceService } from '../services/newsservice.service';

@Component({
  selector: 'app-allnews',
  templateUrl: './allnews.component.html',
  styleUrls: ['./allnews.component.css']
})
export class AllnewsComponent implements OnInit {

constructor(private newsService:NewsserviceService){}

topHeadlines : any = []

ngOnInit(): void {
  
  this.newsService.topHeadline().subscribe((result) => {
  console.log(result);
  this.topHeadlines = result.articles;
  
  })
}
}
