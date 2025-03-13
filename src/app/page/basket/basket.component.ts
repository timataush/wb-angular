import {Component,OnInit, TemplateRef} from '@angular/core';
// import {main} from "@angular/compiler-cli/src/main";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf, NgIfContext, NgOptimizedImage} from "@angular/common";
import {BasketService} from "../../services/basket.service";
import {provideFirebaseApp} from "@angular/fire/app";
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgIf,
    HttpClientModule,
    NgForOf
  ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {

  basketProducts: any[] = [];
  products: any;

  constructor(private basketService: BasketService) {

    this.basketService.basketItems$.subscribe(products =>{
      this.basketProducts = products;
    })

  }

  ngOnInit(): void {
    this.basketService.loadProductsFromFirebase(); // Загружаем данные из Firebase
    this.basketService.basketItems$.subscribe(products => {
      this.basketProducts = products;
    });
  }




  removeFromBasket(products: any) {
    this.basketService.removeFromBasket(products);
  }

}
