import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Userdata } from '../../models/userdata';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf, NgClass],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: Userdata = { email: '', password: '' };
  registerForm: FormGroup;

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      this.user = this.registerForm.getRawValue();
      // this.registerForm.patchValue()
      this.authService
        .register(this.user)
        .then(() => console.log('User registered successfully!'))
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}


//
// register(): void {
//   if (!this.registerForm.valid) {
//   this.registerForm.markAllAsTouched();
// } else {
//   this.user = this.registerForm.getRawValue();
//   this.authService
//     .register(this.user)
//     .then(() => console.log('User registered successfully!'))
// }
// }
