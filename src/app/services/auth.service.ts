import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Userdata } from "../models/userdata";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) {}


  login(Userdata: Userdata): Promise<void> {
    return signInWithEmailAndPassword(this.auth, Userdata.email, Userdata.password)
      .then(() => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['main']);
      })
      .catch(err => {
        console.error("Login error:", err);
        // alert("Incorrect email or password.");
        this.router.navigate(['/login']);
      });
  }

  /**
   * Register method
   * @param Userdata {email, password}
   */
  register(Userdata: Userdata): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, Userdata.email, Userdata.password)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.error("Registration error:", err);
        this.router.navigate(['/register']);
      });
  }

  /**
   * Logout method
   */
  logout(): Promise<void> {
    return signOut(this.auth)
      .then(() => {
        localStorage.removeItem('token');
        // alert("Logout successful!");
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.error("Logout error:", err);
      });
  }

  sendPasswordResetEmail(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email)
      .then(() => {
      })
      .catch(err => {
        console.error("Error sending password reset email:", err);
      });
  }
}
