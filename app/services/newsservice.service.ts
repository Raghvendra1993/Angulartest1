import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsserviceService {

  constructor(private http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c0afff4dd4d048e2bee3601d312cb810";

  techNewsApi = "";
  
 topHeadline():Observable<any>{
  return this.http.get(this.newsApiUrl)
 } 
}
