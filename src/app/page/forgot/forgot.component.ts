import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    NgClass
  ],
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onResetClick(): void {
    if (this.forgotForm.valid) {
      const email = this.forgotForm.get('email')?.value;

      this.authService.sendPasswordResetEmail(email)
        .then(() => {
          alert(`Password reset email has been sent to ${email}. Please check your inbox.`);
        })
        .catch(err => {
          console.error('Error sending password reset email:', err);
          alert('Failed to send reset email. Please try again later.');
        });
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
