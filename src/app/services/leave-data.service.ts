import { Injectable } from '@angular/core';
import { Leave } from '../models/leave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveDataService {
  private leaves: Leave[] = [];
  private nextId = 1;

  constructor() {}

  getLeavesByEmployee(employeeId: number): Leave[] {
    return this.leaves.filter(leave => leave.employeeId === employeeId);
  }

  addLeave(leave: Omit<Leave, 'id' | 'status'>): void {
    const newLeave: Leave = {
      id: this.nextId++,
      status: 'Pending',
      ...leave
    };
    this.leaves.push(newLeave);
  }

  updateLeaveStatus(id: number, status: 'Approved' | 'Rejected'): void {
    const leave = this.leaves.find(l => l.id === id);
    if (leave) {
      leave.status = status;
    }
  }
}
