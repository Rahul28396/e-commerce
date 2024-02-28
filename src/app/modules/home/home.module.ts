import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';


@NgModule({
  declarations: [
    HomeComponent,
    FeaturedProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
