// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';   // <-- Import FormsModule here

// @Component({
//   selector: 'app-admin-login',
//   standalone: true,     // If standalone component
//   imports: [FormsModule],  // Add FormsModule here
//   templateUrl: './admin-login.component.html',
//   styleUrls: ['./admin-login.component.css']
// })
// export class AdminLoginComponent {
//   username: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private router: Router) {}

//   onSubmit() {
//     if (this.username === 'admin' && this.password === 'admin123') {
//       this.errorMessage = '';
//       this.router.navigate(['/admin']);  // Navigate to admin dashboard
//     } else {
//       this.errorMessage = 'Invalid username or password';
//     }
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { AdminLoginComponent } from './admin-login/admin-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, AdminLoginComponent],  // Add FormsModule and your components here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
