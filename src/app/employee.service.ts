import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://127.0.0.1:8080/api/v1";
  // private baseGetURL = "http://127.0.0.1:8080/api/v1/employees";
  // private basePostURL = "http://127.0.0.1:8080/api/v1/create-employees";
  // private basePutURL = "http://127.0.0.1:8080/api/v1/update-employees";
  // private basedeleteURL = "http://127.0.0.1:8080/api/vi/delete-employee";

  constructor(private httpCLient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpCLient.get<Employee[]>(`${this.baseURL}/employees`);
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.httpCLient.post(`${this.baseURL}/create-employees`, employee);
  }

  getEmployeesById(id: number): Observable<Employee>{
    return this.httpCLient.get<Employee>(`${this.baseURL}/employees/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpCLient.put(`${this.baseURL}/update-employees/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpCLient.delete(`${this.baseURL}/delete-employee/${id}`);
  }

}
