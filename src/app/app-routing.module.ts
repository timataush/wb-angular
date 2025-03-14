// import { Routes, RouterModule } from '@angular/router';
// import {NgModule} from '@angular/core';
// import { CustomPreloadingStrategy } from './custom-preloading-strategy';
//
// // export const routes: Routes = [];
// import {LoginComponent} from "./page/login/login.component";
// import {HeaderComponent} from "./page/header/header.component";
// import {RegisterComponent} from "./page/register/register.component";
// import {ForgotPasswordComponent} from "./page/forgot/forgot.component";
// import {FooterComponent} from "./page/footer/footer.component";
// import {MainComponent} from "./page/main/main.component";
// import {BreadcrumbsComponent} from "./page/breadcrumbs/breadcrumbs.component";
//
// export const routes : Routes = [
//   {path: '', redirectTo: 'login', pathMatch: 'full'},
//   {path:'login',
// loadComponent: () =>
//   import('./page/login/login.component').then((m) => m.LoginComponent),
//   },
//   {path:'header',
//     loadComponent: () =>
//       import('./page/header/header.component').then((m) => m.HeaderComponent),
//   },
//   {path:'register',
//     loadComponent: () =>
//       import('./page/register/register.component').then((m) => m.RegisterComponent),
//   },
//   {path:'forgot',
//     loadComponent: () =>
//       import('./page/forgot/forgot.component').then((m) => m.ForgotPasswordComponent),
//   },
//   {path:'footer',
//     loadComponent: () =>
//       import('./page/footer/footer.component').then((m) => m.FooterComponent),
//   },
//
//   {path:'main',
//     loadComponent: () =>
//       import('./page/main/main.component').then((m) => m.MainComponent),
//   },
//   {path:'breadcrumbs',
//     loadComponent: () =>
//       import('./page/breadcrumbs/breadcrumbs.component').then((m) => m.BreadcrumbsComponent),
//   },
//
//   {
//     path:'load',
//     loadComponent: () =>
//       import('./page/load/load.component').then((m) => m.LoadComponent),
//     data: { preload: true },
//   }
//
// ]
//
// @NgModule ({
//     imports: [RouterModule. forRoot (routes,{
//       preloadingStrategy: CustomPreloadingStrategy,
//     }) ],
//     exports: [RouterModule],
//     providers: [CustomPreloadingStrategy],
// })
// export class AppRoutingModule {}


// main//////////////////////
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./page/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'header',
    loadComponent: () =>
      import('./page/header/header.component').then((m) => m.HeaderComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./page/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'forgot',
    loadComponent: () =>
      import('./page/forgot/forgot.component').then((m) => m.ForgotPasswordComponent),
  },
  {
    path: 'footer',
    loadComponent: () =>
      import('./page/footer/footer.component').then((m) => m.FooterComponent),
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./page/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: 'breadcrumbs',
    loadComponent: () =>
      import('./page/breadcrumbs/breadcrumbs.component').then((m) => m.BreadcrumbsComponent),
  },
  {
    path: 'load',
    loadComponent: () =>
      import('./page/load/load.component').then((m) => m.LoadComponent),
    data: { preload: true },
  },
  {
    path: 'basket',
    loadComponent: () =>
      import('./page/basket/basket.component').then((m) => m.BasketComponent),
    data: { preload: true },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy],
})
export class AppRoutingModule {}





