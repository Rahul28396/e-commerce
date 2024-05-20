import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private storageKey = 'TOKEN';
  private httpService = inject(HttpClient);
  private localStoageService = inject(LocalStorageService);
  loggedInUser!: User | null;

  isUserLoggedIn(){
    return this.localStoageService.getItem<Partial<{ access_token: string}>>(this.storageKey);
  }

  getLoggedInUserDetails<T>(){
    const url = 'https://api.escuelajs.co/api/v1/auth/profile';
    const token = this.isUserLoggedIn();

    return this.httpService.get<T>(url,{
      headers: {
        "Authorization": `Bearer ${token?.['access_token']}`
      }
    })
  }

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
    this.localStoageService.clearStorage(this.storageKey);
    this.loggedInUser = null;
  }
}
