// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { environment } from './environment/environment';
// import {PreloadAllModules, RouterModule,RouterOutlet} from '@angular/router';
// import {AppRoutingModule, routes} from './app-routing.module';
// import {AuthService} from './services/auth.service';
// import {FormsModule} from '@angular/forms';
// import {LoginComponent} from "./page/login/login.component";
// import {RegisterComponent} from "./page/register/register.component";
// import {HeaderComponent} from "./page/header/header.component";
// import { ReactiveFormsModule } from '@angular/forms';
// import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
//
// import {ProductService} from "./services/product.service";
//
//
//
// let AuthComponent;
//
// @NgModule({
//   declarations: [
//     ],
//
//   imports: [
//     BrowserModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig),
//     // AngularFirestoreModule,
//     RouterOutlet,
//     AppRoutingModule,
//     FormsModule,
//     AngularFireDatabaseModule,
//     // AuthComponent,
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     HeaderComponent,
//     ReactiveFormsModule,
//     // Firestore
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
//   ],
//   providers: [ProductService],
//   bootstrap: [],
// })
// export class AppModule {}
//
//
//





///////////////////////////////////////
// main



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from './environment/environment';
import { AppComponent } from './app.component';
import {environment} from "./environment/environment";
import { HttpClientModule } from '@angular/common/http';
import {BasketService} from "./services/basket.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,

  ],
  providers: [BasketService],
  bootstrap: [AppComponent],
})
export class AppModule {}

