import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

  // login(): Observable<String> {
  //   let auth = {
  //     "userName": "Justin",
  //     "password": "admin"
  //   }
  //   // return this.http.post<String>('http://localhost:8080/api/v1/users/login', auth);
  //   return this.http.get<any>('https://dummyjson.com/products');
  // } 
}
