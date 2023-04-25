import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../types/Employee';
import { EmployeeListService } from './employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnChanges, OnInit, OnDestroy {
  employees: Employee[] = [];

  constructor(private employeeListService: EmployeeListService) {}
  //This happens frequently, so any operation you perform here impacts performance significantly.
  //The component has no inputs, so the framework will not call ngOnChanges().
  //This happens frequently, so any operation you perform here impacts performance significantly.
  ngOnChanges(): void {
    console.log('OnChanges EmployeeList');
  }
  //Called once, after the first ngOnChanges()
  ngOnInit(): void {
    console.log('OnInit Employee List');
    this.employees = this.employeeListService.getEmployees();
  }

  ngOnDestroy(): void {
    console.log('OnDestroy Employee List');
  }

  handleOnBoxClick(employee: Employee) {
    console.log(employee);
  }
}
