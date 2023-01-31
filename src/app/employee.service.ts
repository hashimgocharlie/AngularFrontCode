import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseGetURL = "http://127.0.0.1:8080/api/v1/employees";
  private basePostURL = "http://127.0.0.1:8080/api/v1/create-employees";

  constructor(private httpCLient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpCLient.get<Employee[]>(`${this.baseGetURL}`);
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.httpCLient.post(`${this.basePostURL}`, employee);
  }
}
