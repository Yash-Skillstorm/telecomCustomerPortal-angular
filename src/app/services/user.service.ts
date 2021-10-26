import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
 url = 'https://localhost:44305/api/Users';
  //url = 'https://telecomcustomerportal-application.azurewebsites.net/api/Users'
  constructor(private router: Router, private http: HttpClient) { 
  }


    addUser(user: User): Observable<number> {      
      return this.http.post<number>(this.url, user);
    }
  }
//the HTTP post request

      //this.userSubject = new BehaviorSubject<User>(JSON.parse());
        //this.user = this.userSubject.asObservable();
     

    //  login(username : any, password: any) {
    //   return this.http.post<User>(this.url, { username, password })
    //       .pipe(map(user => {
    //           // store user details and jwt token in local storage to keep user logged in between page refreshes
    //           localStorage.setItem('user', JSON.stringify(user));
    //           this.userSubject.next(user);
    //           return user;
    //       }));
  
 
  // logout() {
  //   // remove user from local storage and set current user to null
  //   localStorage.removeItem('user');
  //   this.userSubject.next(null);
  //   this.router.navigate(['/account/login']);