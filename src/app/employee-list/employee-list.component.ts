import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];
  searchText: string= '';
  page: number = 1;
  error:null;

  constructor(private employeeService: EmployeeService, 
    private router: Router) { }

  ngOnInit(): void {
    
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(data);
    },
    error => {
      console.log(error);
      this.error =error.message;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);

  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })

  }

  viewEmployee(id: number){
    this.router.navigate(['employee-details', id]);
  }

  onSearchTextEntered(searchValue: string){

    this.searchText= searchValue;
    console.log(this.searchText);

  }

  key: string = 'id';
  reverse:boolean = false;

  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
