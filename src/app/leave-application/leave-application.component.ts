import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leave-application',
  styleUrls: ['./leave-application.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-application.component.html'
})
export class LeaveApplicationComponent {
  leave = {
    fromDate: '',
    toDate: '',
    reason: ''
  };

  submitted = false;

  submitLeave() {
    if (!this.leave.fromDate || !this.leave.toDate || !this.leave.reason) {
      return; // form invalid, do nothing
    }

    console.log('Leave Submitted:', this.leave);
    this.submitted = true;

    // Clear form data
    this.leave = {
      fromDate: '',
      toDate: '',
      reason: ''
    };

    // Optionally clear the message after 5 seconds
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }
}
