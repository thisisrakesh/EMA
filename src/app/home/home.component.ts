import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToAdminLogin() {
    this.router.navigate(['/admin-login']);
  }

  goToEmployeeLogin() {
    this.router.navigate(['/employee-login']);
  }
}
