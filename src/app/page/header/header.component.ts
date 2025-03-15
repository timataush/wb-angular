import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

isAuthenticated = false;

constructor(private authService: AuthService)  {}

  ngOnInit() {
  this.authService.isAuthenticated$.subscribe((isAuth) => {
    this.isAuthenticated = isAuth;
  })
  }

  logout() {
  this.authService.logout()
  }
}
