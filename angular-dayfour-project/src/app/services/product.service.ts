import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private _httpClient: HttpClient) { }

    getMessage(): string {
        return "Product Management System";
    }

    getProducts(): Observable<Product[]> {
        return this._httpClient.get<Product[]>
            ('http://localhost:3000/products')
    }

}