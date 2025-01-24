import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {footerItems, footerSocials} from "./footer-data";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public footerItems = footerItems
  public socials = footerSocials
}
