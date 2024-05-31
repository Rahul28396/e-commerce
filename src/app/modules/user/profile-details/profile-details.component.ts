import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { CanComponentDeactivate } from 'src/app/core/route-guards/can-component-deactivate.guard';
import { notEqualityValidator, passwordValidator } from 'src/app/core/validators/validator';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit, CanComponentDeactivate {

  private fbService = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  loggedInUser!: Partial<User> | null;
  errorMessage: string = '';
  profileForm: any;
  showChangePassword = false; 

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        this.loggedInUser = data['loggedInUser'];
        this.profileForm = this.fbService.group({
          name: [this.loggedInUser?.name ?? '', [Validators.required, Validators.minLength(4)]],
          email: [this.loggedInUser?.email ?? '', [Validators.required, Validators.email]],
          password: [this.loggedInUser?.password ?? '', [passwordValidator()]],
          newPassword: ['', [passwordValidator()]],
          avartar: [this.loggedInUser?.avatar ?? '']
        },
        {
          validators: notEqualityValidator('password','newPassword')
        });
      }
    });
    
  }

  canDeactivate(): Observable<boolean>{

    if(this.formControl('name').value !== this.loggedInUser?.name 
    || this.formControl('email').value !== this.loggedInUser?.email
    || this.formControl('password').value !== this.loggedInUser?.password){    
      const confirmation = window.confirm('Is it OK?');

      return of(confirmation);
    }
   
    return of(true);
  }

  formControl(key: string) {
    return this.profileForm.get(key);
  }

  saveProfile() {
    console.log(this.profileForm.value);
  }

}
