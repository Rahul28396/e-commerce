import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipes/pipe.module';
import { RouterModule } from '@angular/router';

const sharedComponents = [
  ProductComponent
]

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    RouterModule
  ],
  declarations: sharedComponents,
  exports: sharedComponents
})
export class SharedComponentModule { }
