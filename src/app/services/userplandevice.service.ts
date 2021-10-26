import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Userplandevice } from '../model/userplandevice.model';

@Injectable({
  providedIn: 'root'
})
export class UserplandeviceService {

  url ='https://localhost:44305/api/UserPlanDevices';
  constructor(private http: HttpClient) { }

  getAllUserPlanDeviceData(): Observable<Userplandevice[]>{
    return this.http.get<Userplandevice[]>(this.url);
  }

  postUserPlanDeviceData(userplandevice: Userplandevice): Observable<number> {
    return this.http.post<number>(this.url, userplandevice);
  }

  deleteUserPlanDeviceData(id: Number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
