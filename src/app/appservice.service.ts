import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

   login(username:string,password:string): Observable<any> {
     let auth = {
       "userName": username,
       "password": password
     }
  return this.http.post<any>('http://localhost:8080/api/v1/users/login', auth);
  } 
}
