import { Injectable } from '@angular/core';
import { Userplan } from '../model/userplan.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserplanService {

  url = 'https://localhost:44305/api/UsersPlans';
  constructor(private http: HttpClient) { }

  getAllUserPlanData(): Observable<Userplan[]>{
    return this.http.get<Userplan[]>(this.url);
  }

  postUserPlanData(userplan: Userplan): Observable<number>{
    return this.http.post<number>(this.url, userplan);
  }

  deleteUserPlanData(id: Number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
