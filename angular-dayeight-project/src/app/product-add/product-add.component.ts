import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    this._httpClient.post('http://localhost:3000/products', this.product).subscribe(result => {
      alert('Product Added Successfully.');
      this._router.navigate(['/products']);
    }, (error) => {
      console.log(error);
    })
  }

}
