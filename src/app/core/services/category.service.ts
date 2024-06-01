import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'https://api.escuelajs.co/api/v1/categories';

  cartegorires: Category[] = [];

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }
}
