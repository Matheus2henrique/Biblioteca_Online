// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { User } from '../models/user.models';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:8080/api/auth';
//   private loggedInUser: User | null = null;

//   constructor(private http: HttpClient) {}

//   login(email: string, password: string): Observable<User> {
//     // Simulação de login (substituir por chamada real à API)
//     const user: User = { id: 1, name: 'Usuário', email, password };
//     this.loggedInUser = user;
//     return of(user);
//   }

//   register(user: User): Observable<User> {
//     // Simulação de cadastro (substituir por chamada real à API)
//     return of(user);
//   }

//   logout(): void {
//     this.loggedInUser = null;
//   }

//   isAuthenticated(): boolean {
//     return !!this.loggedInUser;
//   }

//   getCurrentUser(): User | null {
//     return this.loggedInUser;
//   }
// }
