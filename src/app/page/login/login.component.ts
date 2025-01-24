import { Component } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Userdata } from "../../models/userdata";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {HeaderComponent} from "../header/header.component";
import {AuthError} from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: Userdata = {
    email: '',
    password: ''
  };

  loginForm: FormGroup;

  errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;

      this.authService.login(this.user)
        .then((data) => {
          this.router.navigate(['main']);
        })
        .catch(err=> {
          this.errorMessage = err
          console.log(this.errorMessage);
        })

    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
