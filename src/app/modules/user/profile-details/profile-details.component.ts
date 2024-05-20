import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { passwordValidator } from 'src/app/core/validators/validator';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  private fbService = inject(FormBuilder);
  private authService = inject(AuthenticationService);

  loggedInUser!: Partial<User> | null;
  errorMessage: string = '';
  profileForm: any; 

  ngOnInit(): void {
    this.authService.getLoggedInUserDetails<User>().subscribe({
      next: (data) => {
        this.loggedInUser = data;
        this.profileForm = this.fbService.group({
          name: [this.loggedInUser?.name ?? '', [Validators.required, Validators.minLength(4)]],
          email: [this.loggedInUser?.email ?? '', [Validators.required, Validators.email]],
          password: [this.loggedInUser?.password ?? '', [passwordValidator()]],
          newPassword: ['', [passwordValidator()]],
          avartar: [this.loggedInUser?.avatar ?? '']
        });
      }
    });
    
  }

  formControl(key: string) {
    return this.profileForm.get(key);
  }

  saveProfile() {
    console.log(this.profileForm.value);
  }

}
