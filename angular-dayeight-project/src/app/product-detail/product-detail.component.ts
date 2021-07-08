import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product: Product = new Product();

  constructor(private _httpClient: HttpClient,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get<Product>('http://localhost:3000/products/' + this.id).subscribe(result => {
      this.product = result;
    }, error => {
      console.log(error);
    })
  }

  deleteProduct() {
    this._httpClient.delete('http://localhost:3000/products/' + this.id).subscribe(result => {
      alert('Product Deleted Successfully.');
      this._router.navigate(['/products']);
    }, (error) => {
      console.log(error);
    })
  }

}
