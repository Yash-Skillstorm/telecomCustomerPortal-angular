import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../model/plan.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = 'https://localhost:44305/api/Plans';
  
  constructor(private http: HttpClient) { }

  getAllPlansByUserID(): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.url + '/3');
  }

  getAllPlans(): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.url);
  }

  

}
