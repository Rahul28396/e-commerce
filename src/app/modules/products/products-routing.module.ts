import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { productDetailsResolver } from 'src/app/core/resolvers/product-details.resolver';

const routes: Routes = [
  {
    path: 'category/:id',
    component: ProductListComponent
  },
  {
    path: ':productId',
    // title: 'PRODUCT DETAILS',
    component: ProductDetailsComponent,
    resolve: {
      productDetails : productDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
