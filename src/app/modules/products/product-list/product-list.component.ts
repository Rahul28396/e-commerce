import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  allProducts: Product[] = [];
  price = 100;

  constructor(
    private productService: ProductService,
    private routerService: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.routerService.params.subscribe(params => {
      const categoryId = params['id'];
      this.productService.getProducts(categoryId).subscribe(products => {
        this.allProducts = products;
      });
    })

  }
}
