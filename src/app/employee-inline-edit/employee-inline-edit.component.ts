import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-inline-edit',
  templateUrl: './employee-inline-edit.component.html',
  styleUrls: ['./employee-inline-edit.component.css']
})
export class EmployeeInlineEditComponent implements OnInit{
  employees: Employee[];
  searchText: string= '';
  page: number = 1;
  isEdit: boolean;
  id: number;
  employee: Employee;

  constructor(private employeeService: EmployeeService, 
    private router: Router) { }

  ngOnInit(): void {
    
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(data);
    });
  }

  updateEmployee(id: number, employee: Employee){
    this.employeeService.updateEmployee(id, employee).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
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
  

  onEdit(item: any){
    debugger;

    //code to enable only one row for edit at a time - start
    this.employees.forEach(element => {
      element.isEdit = false;
    });
    //code to enable only one row for edit at a time - end

    item.isEdit = true;
  }

}