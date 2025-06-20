import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { AnnouncementsComponent } from './announcements/announcements.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },                      
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'employee-login',
    loadComponent: () => import('./employee-login/employee-login.component').then(m => m.EmployeeLoginComponent)
  },

  { path: 'employee-profile', component: EmployeeProfileComponent },  
  { path: 'leave-request', component: LeaveRequestComponent },
  { path: 'leave-application', component: LeaveApplicationComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: '**', redirectTo: '' }                               
];
