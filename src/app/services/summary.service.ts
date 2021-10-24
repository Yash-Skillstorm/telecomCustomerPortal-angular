import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Summary } from '../model/summary.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Userplandevice } from '../model/userplandevice.model';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  url ='https://localhost:44305/api/Summaries';
 //url2 ='https://localhost:44305/api/UserPlanDevices';
  constructor(private http: HttpClient) { }

  getPlanDeviceBuyUserID(): Observable<Summary[]>{
    return this.http.get<Summary[]>(this.url + '/3');
  }

  postUserPlanDeviceData(userplandevice: Userplandevice): Observable<number>{
    return this.http.post<number>(this.url, userplandevice);
  }
}
