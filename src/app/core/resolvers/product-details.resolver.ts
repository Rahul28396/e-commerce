import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { EMPTY, Observable, mergeMap, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

export const productDetailsResolver: ResolveFn<Product> =

  (route, state): Observable<Product> => {

    const productService = inject(ProductService);
    const productId = Number(route.paramMap.get('productId'));

    return productService.getProduct(productId).pipe(
      mergeMap(data => {
        if (data) {
          return of(data);
        } else {
          return EMPTY;
        }
      }));
  };
