import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Device } from '../model/device.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  url = `${environment.apiURL}api/Devices`; 
  constructor(private http: HttpClient) { }

  getAllDevices(): Observable<Device[]>{
    return this.http.get<Device[]>(this.url);
  }
}
