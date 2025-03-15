import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})




export class FooterComponent {

  dropdownState: { [key: string]: boolean } = {
    buyers: false,
    sellers: false,
    projects: false,
    company: false
  };


  toggleDropdown(key:string): void {
    this.dropdownState[key] = !this.dropdownState[key];
  }

}




