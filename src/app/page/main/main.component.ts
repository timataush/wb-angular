import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";
import {NgIf, NgFor, NgForOf, NgOptimizedImage, CurrencyPipe} from "@angular/common";
import {ProductService} from "../../services/product.service";
// import {Product} from "../../app.component";




import { HttpClient, HttpClientModule} from "@angular/common/http";

//
export class Product {
  constructor(
    public name: string,
    public price: number,
    public image: string,
    public sale: number,
    public recommend: boolean,
    public isSale:boolean,
    public rating:number,
    public reviews: number,
    public date: string,
  ) {}
}



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgOptimizedImage,
    CurrencyPipe,
    HttpClientModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  products: Product[] = [];

  constructor(
    public authService: AuthService,
    // private productService: ProductService,
    private http: HttpClient
  ) {}

  logout(){
    this.authService.logout();
}


  product: any;


  ngOnInit(): void {
    // this.productService.getProducts().subscribe((data) => {
    //   this.products = data;
    //   console.log(this.products);
    // });

      this.loadProducts();
    }


  loadProducts() {
    this.http.get<{ [key: string]: Product }>("https://wb-angular-default-rtdb.firebaseio.com/products.json")
      .subscribe({
        next:(data:any) => {
          console.log('Data from Firebase:', data);
          this.products = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].name,
            price: data[key].price,
            image: data[key].image || 'assets/images/placeholder.png',
            sale: data[key].sale,
            recommend: data[key].recommend,
            isSale: data[key].isSale,
            rating: data[key].rating,
            reviews: data[key].reviews,
            date: data[key].date,
          }));

        }});

  }


}
