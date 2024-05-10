import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { FilterProductPipe } from 'src/app/shared/pipes/filter-product.pipe';
import { FormsModule } from '@angular/forms';
import { ProductHeaderTextPipe } from 'src/app/shared/pipes/product-header-text.pipe';
import { ProductImagePipe } from 'src/app/shared/pipes/product-image.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductFilterComponent,
    FilterProductPipe,
    ProductHeaderTextPipe,
    ProductImagePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
