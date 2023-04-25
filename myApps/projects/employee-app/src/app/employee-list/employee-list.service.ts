import { Injectable } from '@angular/core';
import { Employee } from '../../types/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  constructor() {
    console.log('EmployeeListService');
  }

  getEmployees(): Employee[] {
    return [
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
  }
}
