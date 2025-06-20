export interface Leave {
  id: number;
  employeeId: number;
  startDate: string; 
  endDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}
