import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(categoryId: number): Observable<Product[]>{
    const url = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
    return this.http.get<Product[]>(url);
  }
  
}
