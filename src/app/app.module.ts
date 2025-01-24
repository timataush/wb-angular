import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from './environment/environment';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
// import {AuthService} from './services/auth.service';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from "./page/login/login.component";
import {RegisterComponent} from "./page/register/register.component";
import {HeaderComponent} from "./page/header/header.component";
import { ReactiveFormsModule } from '@angular/forms';

let AuthComponent;

@NgModule({
  declarations: [

  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    // AuthComponent,
    AppComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    ReactiveFormsModule
    // Firestore
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

