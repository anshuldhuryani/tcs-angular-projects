import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: any;
  product: Product = new Product();

  constructor(private _route: ActivatedRoute,
    private _httpClient: HttpClient,
    private _router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._httpClient.get<Product>('http://localhost:3000/products/' + this.id).subscribe(result => {
      this.product = result;
    }, error => {
      console.log(error);
    })
  }

  updateProduct() {
    this._httpClient.put('http://localhost:3000/products/' + this.id, this.product).subscribe(result => {
      alert('Product Updated Successfully.');
      this._router.navigate(['/products']);
    }, (error) => {
      console.log(error);
    })
  }

}
