import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { TemplatePageTitleStrategyService } from 'src/app/core/services/template-page-title-strategy.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails!: Product;
  selectedImage!: string;

  constructor(
    private _routerService: ActivatedRoute,
    private _title: TemplatePageTitleStrategyService
  ) {}

  ngOnInit(): void {
    this._routerService.data.subscribe(value => {
      this.productDetails = value['productDetails'];
      this.selectedImage = this.productDetails.images[0];
      this._title.setTitle(this.productDetails.title);
      // this.builtInTitle.setTitle(this.productDetails.title)
    });

  }

  changeSelectedImage(image: string) {
    this.selectedImage = image;
  }

}
