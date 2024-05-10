import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  productDetails!: Product;
  
  constructor(
    private _productService: ProductService,
    private _routerService: ActivatedRoute
  ){

  }
  
  ngOnInit(): void {
    this._routerService.params.subscribe((params: { [x: string]: string | number; }) => {
      const productId = +params['productId'];
      this._productService.getProduct(productId).subscribe({
        next: (data: Product) => {
          this.productDetails = data
          console.log(data)
        }
      })
    })
    
  }

}
