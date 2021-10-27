import { Injectable } from '@angular/core';
import { Userplan } from '../model/userplan.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserplanService {

  url = `${environment.apiURL}api/UsersPlans`;  
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
