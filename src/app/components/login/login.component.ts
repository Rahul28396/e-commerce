import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { passwordValidator } from 'src/app/core/validators/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fbService = inject(FormBuilder);
  private authService = inject(AuthenticationService);
  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);
  errorMessage = '';


  loginForm = this.fbService.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator()]]
  });

  formControl(key: string) {
    return this.loginForm.get(key);
  }

  signup() {
    const { email, password } = this.loginForm.value;
    const newUser = {
      email: email as string,
      password: password as string,
    }
    this.authService.login(newUser).subscribe({
      next: (data) => {
        this.localStorageService.addItem('TOKEN', data);
        if (this.authService.isUserLoggedIn()) {
          this.authService.getLoggedInUserDetails<User>().subscribe(res => {
            this.authService.loggedInUser = res;
            this.router.navigateByUrl('/');
          });
        }

      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.error['message'][0];
      },
      complete: () => {
        console.log('Completed')
      }
    })
  }

}
