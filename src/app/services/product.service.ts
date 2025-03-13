import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  // Метод для получения списка продуктов
  getProducts(): Observable<any[]> {
    return this.db.list('products').valueChanges();
  }

  // Метод для добавления нового продукта
  addProduct(product: any): void {
    this.db.list('products').push(product);
  }
}
