import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  addData(dataUrl: any,data: any, header: any): Observable<any> {
    return this.http.post<any>(dataUrl, data, header);
  }

  getData(dataUrl: any,header: any): Observable<any> {
    return this.http.get<any>(dataUrl, header);
  }
}