import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-request.component.html'
})
export class LeaveRequestComponent {
  employeeName = '';
  leaveType = '';
  fromDate = '';
  toDate = '';
  reason = '';
  message = '';

  leaveTypes = ['Sick Leave', 'Casual Leave', 'Earned Leave'];

  submitLeaveRequest() {
    if (!this.employeeName || !this.leaveType || !this.fromDate || !this.toDate) {
      this.message = 'Please fill all the required fields.';
      return;
    }
    // Here you can add logic to send the leave request to backend or service
    this.message = `Leave request submitted for ${this.employeeName}.`;
    this.clearForm();
  }

  clearForm() {
    this.employeeName = '';
    this.leaveType = '';
    this.fromDate = '';
    this.toDate = '';
    this.reason = '';
  }
}
