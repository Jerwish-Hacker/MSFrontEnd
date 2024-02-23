import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let auth = {
      "userName": username,
      "password": password
    }
    return this.http.post<any>('http://localhost:8080/api/v1/users/login', auth);
  }

  addPurchase(arr: any[]): Observable<any> { return this.http.post<any>('http://localhost:8080/api/v1/purchase/create', arr);  }
  
  salesFetchPName(): Observable<any> {    return this.http.get<any>('http://localhost:8080/api/v1/purchase/sales'); }
  
  salesFetchSubPName(keyword: string): Observable<any> {
    let keywordjson = {
      "keyword": keyword
    }
    return this.http.get<any>('http://localhost:8080/api/v1/purchase/sales/subname', { params: keywordjson });
  }

  salesFetchQuantity(p_name: string, p_sub_name: string): Observable<any> {
    let keywordjson = {
      "p_name": p_name,
      "p_sub_name": p_sub_name
    }
    return this.http.get<any>('http://localhost:8080/api/v1/purchase/sales/quantity', { params: keywordjson });
  }

  addVendor(vname:string,vaddress:String,vphonenumber:String){
    let data = {
      "vendorName": vname,
      "vendorAddress": vaddress,
      "vendorPhoneNo":vphonenumber,
      "status": "Active"
    }
    return this.http.post<any>('http://localhost:8080/api/v1/vendor/add', data);
  }




}

