// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';
//   error: string = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   login(): void {
//     this.authService.login(this.email, this.password).subscribe({
//       next: () => this.router.navigate(['/home']),
//       error: () => this.error = 'Email ou senha inválidos'
//     });
//   }

//   goToRegister(): void {
//     this.router.navigate(['/register']);
//   }
// }
