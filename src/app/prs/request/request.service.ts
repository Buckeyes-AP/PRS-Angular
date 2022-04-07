import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: string = "http://localhost:8297/api/requests"



  constructor(
    private http: HttpClient
  ) { }

  requests(id: number): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Request[]>;
  }

  review(id: number, request: Request): Observable<Request> {
    return this.http.put(`${this.baseUrl}/${id}`, request) as Observable<Request>;
  }

  approve(id: number, request: Request): Observable<Request> {
    return this.http.put(`${this.baseUrl}/${id}`, request) as Observable<Request>;
  }

  reject(id: number, request: Request): Observable<Request> {
    return this.http.put(`${this.baseUrl}/${id}`, request) as Observable<Request>;
  }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Request[]>;
  }

  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Request>;
  }

  create(user: Request): Observable<Request> {
    return this.http.post(`${this.baseUrl}`, user) as Observable<Request>;
  }

  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/${request.id}`, request) as Observable<any>;
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
