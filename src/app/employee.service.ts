import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://127.0.0.1:8080/api/v1/employees";
  constructor(private httpCLient: HttpClient) { }
  getEmployeesList(): Observable<Employee[]>{
    return this.httpCLient.get<Employee[]>(`${this.baseURL}`);
  }
}
