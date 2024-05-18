import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private httpService = inject(HttpClient);

  signupUser(newUser: Partial<User>): Observable<User> {
    const url = 'https://api.escuelajs.co/api/v1/users/';
    delete newUser.id;
    return this.httpService.post<User>(url, newUser);
  }

  login(user: Partial<User>) {
    const { email, password } = user;
    const url = 'https://api.escuelajs.co/api/v1/auth/login';
    return this.httpService.post(url, { email, password });
  }

  logout() {
    
  }
}
