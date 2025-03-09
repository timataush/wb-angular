import { Injectable } from '@angular/core';
import { Auth,User,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, UserCredential, AuthError } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { Userdata } from "../models/userdata";
import {BehaviorSubject, Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  user: User | null = null;


  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(this.auth, (user)=> {
      this.user = user;
      if(user){
        localStorage.setItem('token', 'true');
        this.isAuthenticated.next(true);
      }
      else{
        localStorage.removeItem('token');
        this.isAuthenticated.next(false);
      }
    });
  }



  isUserAuthenticated(): boolean {
    return this.user! === null;
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
