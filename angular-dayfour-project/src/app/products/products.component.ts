import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  productList: Array<Product> = [];
  message: string = "";

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.message = this._productService.getMessage();
    this._productService.getProducts().subscribe(result => {
      this.productList = result;
      console.log(this.productList);
    }, error => {
      console.log(error);
    })
  }

}
