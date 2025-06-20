import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private employee: Employee | null = null;

  setEmployee(emp: Employee) {
    this.employee = emp;
  }

  getEmployee(): Employee | null {
    return this.employee;
  }
}
