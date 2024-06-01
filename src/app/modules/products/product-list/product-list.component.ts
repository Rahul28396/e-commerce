import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductFilterQuery } from 'src/app/core/models/product-filter-query.model';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  allProducts: Product[] = [];
  filterQuery = {};

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((data) => {
      let query: ProductFilterQuery = {};
      for (const key of data.keys) {
        query[key] = isNaN(Number(data.get(key))) ? String(data.get(key)) : Number(data.get(key));
      }

      this.filterQuery = query;

      this.productService.filterProducts(this.filterQuery).subscribe(products => {
        this.allProducts = products;
      });;
    });

  }
}
