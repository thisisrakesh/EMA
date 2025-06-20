import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [CommonModule, FormsModule, FilterPipe]
})
export class AdminComponent {
  searchText: string = '';

  employees: Employee[] = [
    { id: 1, name: 'Rakesh', role: 'Developer', email: 'Rakesh@example.com' },
    { id: 2, name: 'Sonia', role: 'Team Lead', email: 'sonia@example.com' },
    { id: 3, name: 'Charitha', role: 'Power Bi Developer', email: 'charitha@example.com' },
  ];

  // 👇 This ensures new IDs are unique and incrementing
  nextId: number = Math.max(...this.employees.map(e => e.id), 0) + 1;

  selectedEmployee: Employee = this.resetEmployee();

  resetEmployee(): Employee {
    return { id: 0, name: '', role: '', email: '' };
  }

  saveEmployee() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.nextId++;
      this.employees.push({ ...this.selectedEmployee });
    } else {
      const index = this.employees.findIndex(e => e.id === this.selectedEmployee.id);
      if (index > -1) {
        this.employees[index] = { ...this.selectedEmployee };
      }
    }
    this.clearForm();
  }

  editEmployee(emp: Employee) {
    this.selectedEmployee = { ...emp }; // 👈 stays on the same page
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
    if (this.selectedEmployee.id === id) {
      this.clearForm();
    }
  }

  clearForm() {
    this.selectedEmployee = this.resetEmployee();
  }
}
