import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../model/plan.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Summary } from '../model/summary.model';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = 'https://localhost:44305/api/Plans';
  constructor(private http: HttpClient) { }

  getAllPlansByUserID(user: User): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.url + '/2');
  }

  getPlanDeviceBuUserID(): Observable<Summary[]>{
    return this.http.get<Summary[]>(this.url + '/2');
  }

  getAllPlans(): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.url);
  }
}
