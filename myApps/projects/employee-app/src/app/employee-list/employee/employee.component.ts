import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Employee } from '../../../types/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnChanges, OnInit, OnDestroy {
  @Input() employee: Employee = {} as Employee;
  @Output() boxEvent = new EventEmitter<Employee>();

  constructor() {}

  ngOnChanges(): void {
    console.log('OnChanges Employee');
    console.log(`OnChanges employee id = ${this.employee.id}`);
  }

  ngOnInit(): void {
    console.log('OnInit Employee');
    console.log(`OnInit employee id = ${this.employee.id}`);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy Employee');
  }

  handleOnImageClick() {
    this.boxEvent.emit(this.employee);
  }
}
