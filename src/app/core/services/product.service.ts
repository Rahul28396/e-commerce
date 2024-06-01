import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductFilterQuery } from '../models/product-filter-query.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private host = 'https://api.escuelajs.co/api/v1';

  constructor(private http: HttpClient) { }

  getProducts(categoryId: number): Observable<Product[]> {
    const url = `${this.host}/categories/${categoryId}/products`;
    return this.http.get<Product[]>(url);
  }

  getProduct(productId: number): Observable<Product> {
    const url = `${this.host}/products/${productId}`;
    return this.http.get<Product>(url);
  }

  filterProducts(query: ProductFilterQuery): Observable<Product[]> {
    const url = this._buildUrl(this.host,query);
    return this.http.get<Product[]>(url);
  }

  private _buildUrl(url: string, query: ProductFilterQuery) {
    let queryParams = [];
    for (let key in query) {
      if (query[key]) {
        queryParams.push(`${key}=${query[key]}`);
      }
    }

    return `${url}/products${queryParams.length ? ('?' + queryParams.join('&')) : ''}`;
  }

}
