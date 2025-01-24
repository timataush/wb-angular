import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./page/header/header.component";
import {ForgotPasswordComponent} from "./page/forgot/forgot.component";
import {LoginComponent} from "./page/login/login.component";
import {FooterComponent} from "./page/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ForgotPasswordComponent, LoginComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wb-angular';
}
