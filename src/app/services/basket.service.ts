// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';
// import {Product} from "../app.component";
//
//
//
//
//
// @Injectable({
//   providedIn: 'root'
// })
//
// export class BasketService {
//
// private basketProducts= new BehaviorSubject<any[]>([]);
// basketItems$ = this.basketProducts.asObservable();
//
// constructor(private http: HttpClient) {}
//
//   addToBasket(product: any): void {
//  const currentProducts = this.basketProducts.getValue();
//  const updateProducts = [...currentProducts, product];
//  this.basketProducts.next(updateProducts);
//
//     this.saveBasketToFirebase(updateProducts);
//   }
//
// removeFromBasket(product: any): void {
//   const currentProducts = this.basketProducts.getValue();
//   const updateProducts = currentProducts.filter(p => p.id !== product.id);
//   this.basketProducts.next(updateProducts);
//
//
//   this.saveBasketToFirebase(updateProducts);
// }
//
//   loadProductsFromFirebase(): void {
//   this.http.get<any[]>('https://wb-angular-default-rtdb.firebaseio.com/basket.json')
//     .subscribe(items => {
//       this.basketProducts.next(items || [])
//       console.log('Data from Firebase:', items);
//     })
// }
//
//
//   private saveBasketToFirebase(items: any) {
//    this.http.put('https://wb-angular-default-rtdb.firebaseio.com/basket.json', items)
//      .subscribe(res =>{
//        console.log('Корзина сохранена в Firebase', res);}
//
//
//   );}
//
//
// }
//




import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private basketProducts = new BehaviorSubject<any[]>([]);
  basketItems$ = this.basketProducts.asObservable();
  private readonly CART_KEY = 'cart';

  constructor() {}

  // Добавление товара в корзину
  addToBasket(product: any): void {
    const cart = this.getCart();
    cart.push(product);
    this.saveCart(cart);
    this.basketProducts.next(cart);
  }

  // Удаление товара из корзины
  removeFromBasket(productId: string): void {
    const cart = this.getCart().filter(item => item.id !== productId);
    this.saveCart(cart);
    this.basketProducts.next(cart);
  }

  // Получение корзины
  getCart(): any[] {
    const cartJson = localStorage.getItem(this.CART_KEY);
    return cartJson ? JSON.parse(cartJson) : [];
  }

  // Сохранение корзины в Local Storage
  private saveCart(cart: any[]): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
  }
}
