import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../types/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee = {} as Employee;
  @Output() boxEvent = new EventEmitter<Employee>();

  constructor() {}

  ngOnInit(): void {}

  handleOnImageClick() {
    this.boxEvent.emit(this.employee);
  }
}
