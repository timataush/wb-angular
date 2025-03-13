import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {Product} from "../app.component";





@Injectable({
  providedIn: 'root'
})

export class BasketService {

private basketProducts= new BehaviorSubject<any[]>([]);
basketItems$ = this.basketProducts.asObservable();

constructor(private http: HttpClient) {}

  addToBasket(product: any): void {
 const currentProducts = this.basketProducts.getValue();
 const updateProducts = [...currentProducts, product];
 this.basketProducts.next(updateProducts);

    this.saveBasketToFirebase(updateProducts);
  }

removeFromBasket(product: any): void {
  const currentProducts = this.basketProducts.getValue();
  const updateProducts = currentProducts.filter(p => p.id !== product.id);
  this.basketProducts.next(updateProducts);


  this.saveBasketToFirebase(updateProducts);
}

loadProductsFromFirebase(): void {
  this.http.get<any[]>('https://wb-angular-default-rtdb.firebaseio.com/basket.json')
    .subscribe(items => {
      this.basketProducts.next(items || [])
      console.log('Data from Firebase:', items);
    })
}







  private saveBasketToFirebase(items: any) {
   this.http.put('https://wb-angular-default-rtdb.firebaseio.com/basket.json', items)
     .subscribe(res =>{
       console.log('Корзина сохранена в Firebase', res);}


  );}








}
