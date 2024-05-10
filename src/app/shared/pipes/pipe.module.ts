import { NgModule } from '@angular/core';
import { FilterProductPipe } from 'src/app/shared/pipes/filter-product.pipe';
import { ProductHeaderTextPipe } from 'src/app/shared/pipes/product-header-text.pipe';
import { ProductImagePipe } from 'src/app/shared/pipes/product-image.pipe';

const pipes = [
  FilterProductPipe,
  ProductHeaderTextPipe,
  ProductImagePipe
]

@NgModule({
  declarations: pipes,
  exports: pipes
})
export class PipeModule { }
