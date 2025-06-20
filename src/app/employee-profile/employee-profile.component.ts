import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../services/employee-data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-employee-profile',
  standalone: true,
  styleUrls: ['./employee-profile.component.css'],
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-profile.component.html',
})
export class EmployeeProfileComponent {
  employee: Employee = {
    id: 0,
    name: '',
    role: '',
    email: ''
  };

  editableEmployee: Employee = { ...this.employee };
  isEditing = false;
  loaded = false;

  constructor(
    private employeeDataService: EmployeeDataService,
    private router: Router
  ) {}

  ngOnInit() {
    const emp = this.employeeDataService.getEmployee();
    if (emp) {
      this.employee = emp;
      this.editableEmployee = { ...this.employee };
    }
    this.loaded = true; 
  }

  startEdit() {
    this.isEditing = true;
    this.editableEmployee = { ...this.employee };
  }

  saveProfile() {
    this.employee = { ...this.editableEmployee };
    this.employeeDataService.setEmployee(this.employee);
    this.isEditing = false;
  }

  cancelEdit() {
    this.isEditing = false;
    this.editableEmployee = { ...this.employee };
  }

  goToLeave() {
    this.router.navigate(['/leave-application']);
  }

  goToAnnouncements() {
    this.router.navigate(['/announcements']);
  }
}
