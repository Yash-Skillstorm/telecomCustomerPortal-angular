import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://localhost:44305/api/Users';
  constructor(private httpClient: HttpClient) { }

  find(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url);
  }
}
