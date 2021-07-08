import { Component, OnInit } from '@angular/core';
import { Product } from "../models/Product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  showProducts: boolean = true;

  productList: Array<Product> = [];

  products: Array<Product> = [
    { id: 1001, name: 'Product One', price: 12000, image: 'https://d3nn873nee648n.cloudfront.net/900x600/19449/220-SM931459.jpg' },
    { id: 1002, name: 'Product Two', price: 22000, image: 'https://d3nn873nee648n.cloudfront.net/900x600/19449/220-SM931459.jpg' },
    { id: 1003, name: 'Product Three', price: 32000, image: 'https://d3nn873nee648n.cloudfront.net/900x600/19449/220-SM931459.jpg' },
    { id: 1004, name: 'Product Four', price: 30000, image: 'https://d3nn873nee648n.cloudfront.net/900x600/19449/220-SM931459.jpg' },
    { id: 1005, name: 'Product Five', price: 42000, image: 'https://d3nn873nee648n.cloudfront.net/900x600/19449/220-SM931459.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {
    if (this.showProducts == true)
      this.showProducts = false;
    else
      this.showProducts = true;
  }

  addToCart(product: Product) {
    if (this.productList.indexOf(product) == -1) {
      this.productList.push(product);

    } else if (this.productList.indexOf(product) > -1) {
      // writing logic here..
    }
    console.log(this.productList);
  }

  total() {
    return this.productList.reduce((total, product) => total + product.price, 0);
  }

}
