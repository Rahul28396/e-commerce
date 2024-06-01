import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { CommonMaterialModule } from '../common-material/common-material.module';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipeModule,
    SharedComponentModule,
    ProductsRoutingModule,
    CommonMaterialModule
  ]
})
export class ProductsModule { }
