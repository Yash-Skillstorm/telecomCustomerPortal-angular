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
 
  
  
  [x: string]: any;
  //headers_object: HttpHeaders;
  


  //private userSubject: BehaviorSubject<User>;
  //public user: Observable<User>;
  //url = 'https://localhost:44305/api/Users';
  url = 'https://telecomcustomerportal-application.azurewebsites.net/api/Users'
  constructor(private router: Router,
    private http: HttpClient) { 
      
    /*
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("username:password"));
    const httpOptions = {
      headers: headers_object
    };*/
    
  }


    addUser(user: User): Observable<number> {
      //const headers = {'Access-Control-Allow-Origin':'*'};
      return this.http.post<number>(this.url, user);

      /*
      const body = { title: 'Angular POST Request Example' };
      this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
          this.postId = data.id;
          */
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