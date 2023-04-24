import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../types/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee = {} as Employee;

  constructor() {}

  ngOnInit(): void {}

  handleOnImageClick() {
    console.log(this.employee);
  }
}
