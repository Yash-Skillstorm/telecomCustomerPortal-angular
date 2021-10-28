import { Injectable } from '@angular/core';
import { Summary } from '../model/summary.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  
  url = `${environment.apiURL}api/Summaries`; 
  constructor(private http: HttpClient) { }

  getPlanDeviceByUserID(id :Number): Observable<Summary[]> {
    return this.http.get<Summary[]>(`${this.url}/${id}`);
  }  
}
