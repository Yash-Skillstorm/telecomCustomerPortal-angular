import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../model/plan.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url = `${environment.apiURL}api/Plans`; 
  constructor(private http: HttpClient) { }

  getAllPlansByUserID(): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.url + '/3');
  }

  getAllPlans(): Observable<Plan[]>{
    return this.http.get<Plan[]>(this.url);
  }

  

}
