import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./page/header/header.component";
import {ForgotPasswordComponent} from "./page/forgot/forgot.component";
import {LoginComponent} from "./page/login/login.component";
import {FooterComponent} from "./page/footer/footer.component";
import {AsyncPipe, NgIf,isPlatformBrowser} from "@angular/common";

import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoadingService } from './services/loading.service';
import {LoadComponent} from "./page/load/load.component";
// import {AngularFireDatabase} from "@angular/fire/compat/database";


import { HttpClient, HttpClientModule} from "@angular/common/http";
import {BottomMenuComponent} from "./page/bottom-menu/bottom-menu.component";


export class Product {
  constructor(public name: string, public price: number) {}
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, HeaderComponent, ForgotPasswordComponent, LoginComponent, FooterComponent, NgIf, AsyncPipe, LoadComponent, BottomMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent implements OnInit {
  isMobile = false;
  isBrowser: boolean;

  constructor(private router: Router, public loadingService: LoadingService, private http: HttpClient,@Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loadingService.hide();
      }
    });
// courses: any[];
    //
    // db.list('/')
    //   .subscribe(courses=>{
    //     this.courses=courses;
    //     console.log(this.courses);
    //   })



    this.isBrowser = isPlatformBrowser(this.platformId);



  }
  product: any;
    ngOnInit(){
      this.http.get("https://wb-angular-default-rtdb.firebaseio.com/products.json")
        .subscribe({next:(data:any) => {
        console.log('Data from Firebase:', data);
        this.product = new Product(data.name, data.price)}});


      //проверка браузера
      if (this.isBrowser) {
        this.checkScreenWidth();
        window.addEventListener('resize', () => this.checkScreenWidth());
      }

    }

  checkScreenWidth(): void {
    this.isMobile = window.innerWidth <= 1024;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.isBrowser) {
      this.checkScreenWidth();
    }
  }






}


//
//
// import { Component } from '@angular/core';
// import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
// import { LoadingService } from './services/loading.service';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   constructor(private router: Router, public loadingService: LoadingService) {
//     // Подписка на события маршрутизации для отображения/скрытия индикатора загрузки
//     this.router.events.subscribe((event: Event) => {
//       if (event instanceof NavigationStart) {
//         this.loadingService.show();
//       } else if (
//         event instanceof NavigationEnd ||
//         event instanceof NavigationCancel ||
//         event instanceof NavigationError
//       ) {
//         this.loadingService.hide();
//       }
//     });
//   }
// }
