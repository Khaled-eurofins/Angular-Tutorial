import { Component, OnInit } from '@angular/core';
import { Employee } from '../../types/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Khaled',
      email: 'k@gmail.com',
      dob: '05/05/1999',
      gender: 'male',
      experience: 5,
    },
    {
      id: 2,
      name: 'Ahmad',
      email: 'ah@gmail.com',
      dob: '05/05/1970',
      gender: 'male',
      experience: 32,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
