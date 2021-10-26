import { Injectable } from '@angular/core';
import { Summary } from '../model/summary.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  url = 'https://localhost:44305/api/Summaries';
  
  constructor(private http: HttpClient) { }

  getPlanDeviceBuyUserID(): Observable<Summary[]> {
    return this.http.get<Summary[]>(this.url + '/3');
  }

  
}
