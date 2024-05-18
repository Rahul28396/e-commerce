import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { confirmPasswordValidator, passwordValidator } from 'src/app/core/validators/validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  private fbService = inject(FormBuilder);
  private authService = inject(AuthenticationService);
  private router = inject(Router);
  errorMessage = '';


  signUpForm = this.fbService.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator()]],
    confirmPassword: ['', Validators.required],
    avatar: ['https://picsum.photos/800']
  }, { validators: confirmPasswordValidator() })

  formControl(key: string) {
    return this.signUpForm.get(key);
  }

  signup() {
    const { name, email, password, avatar } = this.signUpForm.value;
    const newUser = {
      name: name as string,
      email: email as string,
      password: password as string,
      avatar: avatar as string
    }
    this.authService.signupUser(newUser).subscribe({
      next : (data) => {
        this.router.navigateByUrl('/login');
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
      },
      complete: () => {
        console.log('Completed')
      }
    })
  }
}
