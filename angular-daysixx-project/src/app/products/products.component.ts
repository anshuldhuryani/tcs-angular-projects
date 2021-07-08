import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/products')
      .subscribe(result => {
        this.productList = result;
      }, error => {
        console.log(error);
      })
  }

}
