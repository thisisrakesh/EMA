import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../services/employee-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-login',
  standalone: true,
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css'],
  imports: [CommonModule, FormsModule],
})
export class EmployeeLoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router, private employeeDataService: EmployeeDataService) {}

  onLogin() {
    if (this.username === 'rakesh' && this.password === '1234') {
      this.employeeDataService.setEmployee({
        id: 1,
        name: 'Rakesh Reddy',
        role: 'Software Engineer',
        email: 'rakesh@example.com'
      });
      this.errorMessage = '';
      this.router.navigate(['/employee-profile']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
