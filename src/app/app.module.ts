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











import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from './environment/environment';
import { AppComponent } from './app.component';
import {environment} from "./environment/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Инициализация Firebase
    AngularFireDatabaseModule, // Модуль для работы с Realtime Database
  ],
  providers: [],
  bootstrap: [AppComponent], // Указываем, что AppComponent является корневым
})
export class AppModule {}



//
//
//
// //////////////////
//
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from './environment/environment';
// import { RouterModule, PreloadAllModules } from '@angular/router';
// import { AppRoutingModule, routes } from './app-routing.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
// // Компоненты
// import { AppComponent } from './app.component';
// import { LoginComponent } from './page/login/login.component';
// import { RegisterComponent } from './page/register/register.component';
// import { HeaderComponent } from './page/header/header.component';
// import { ForgotPasswordComponent } from './page/forgot/forgot.component';
// import { FooterComponent } from './page/footer/footer.component';
// import { LoadComponent } from './page/load/load.component';
//
// // Сервисы
// import { AuthService } from './services/auth.service';
// import { ProductService } from './services/product.service';
// import { LoadingService } from './services/loading.service';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AngularFireModule.initializeApp(environment.firebaseConfig), // Инициализация Firebase
//     AngularFirestoreModule, // Модуль Firestore (если используется)
//     AngularFireDatabaseModule, // Модуль Firebase Realtime Database
//     RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), // Маршрутизация
//     AppRoutingModule, // Модуль маршрутизации
//     FormsModule, // Для работы с формами
//     ReactiveFormsModule,
//     LoginComponent,
//     RegisterComponent,
//     HeaderComponent,
//     ForgotPasswordComponent,
//     FooterComponent,
//     LoadComponent,
//     // Для реактивных форм
//   ],
//   providers: [
//     AuthService, // Сервис аутентификации
//     ProductService, // Сервис для работы с продуктами
//     LoadingService, // Сервис для отображения загрузки
//   ],
//   bootstrap: [AppComponent], // Корневой компонент
// })
// export class AppModule {}
