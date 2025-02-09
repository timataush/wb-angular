import { Injectable } from '@angular/core';
import { Auth,User,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, UserCredential, AuthError } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Userdata } from "../models/userdata";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user: User | null = null;



  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(this.auth, (user)=> {
      this.user = user;
      if(user){
        localStorage.setItem('token', 'true');
      }
      else{
        localStorage.removeItem('token');
      }
    });
  }

  isAuthenticated(): boolean {
    return this.user === null || this.user === null;
  }


  login(Userdata: Userdata): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, Userdata.email, Userdata.password)
      .then((userCredential) => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['main']);
        return userCredential;
      })
  }


  register(Userdata: Userdata): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, Userdata.email, Userdata.password)
      .then(() => {
        this.router.navigate(['/login']);
      })
  }


  logout(): Promise<void> {
    return signOut(this.auth)
      .then(() => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      })
  }

  sendPasswordResetEmail(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email)
      .then(() => {
      })
  }
}
