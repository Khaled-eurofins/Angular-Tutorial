import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListService } from './employee-list.service';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeComponent],
  imports: [CommonModule],
  providers: [EmployeeListService],
  exports: [EmployeeListComponent],
})
export class EmployeeListModule {}
