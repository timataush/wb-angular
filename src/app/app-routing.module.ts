import { Routes, RouterModule } from '@angular/router';
import {NgModule} from '@angular/core';
// export const routes: Routes = [];
import {LoginComponent} from "./page/login/login.component";
import {HeaderComponent} from "./page/header/header.component";
import {RegisterComponent} from "./page/register/register.component";
import {ForgotPasswordComponent} from "./page/forgot/forgot.component";
import {FooterComponent} from "./page/footer/footer.component";
import {MainComponent} from "./page/main/main.component";

export const routes : Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component : LoginComponent},
  {path:'header', component : HeaderComponent},
  {path:'register', component : RegisterComponent},
  {path:'forgot', component : ForgotPasswordComponent},
  {path:'footer', component : FooterComponent},
  {path:'main', component : MainComponent},

]

@NgModule ({
    imports: [RouterModule. forRoot (routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
