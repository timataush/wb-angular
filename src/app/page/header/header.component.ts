import { Component } from '@angular/core';
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
export class HeaderComponent {

  // isSubmenuVisible: boolean[] = [false, false]; // Массив для управления видимостью подменю
  //
  // showSubmenu(index: number): void {
  //   this.isSubmenuVisible[index] = true;
  // }
  //
  // hideSubmenu(index: number): void {
  //   this.isSubmenuVisible[index] = false;
  // }


constructor(private authService: AuthService) {}

  //
  // isDropdownVisible: boolean = false;
  //
  // showDropdown(): void {
  //   this.isDropdownVisible = true;
  // }
  //
  // hideDropdown(): void {
  //   this.isDropdownVisible = false;
  // }




  logout() {
  this.authService.logout()
  }
}
