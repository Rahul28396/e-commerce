import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';

import { CheckoutComponent } from './checkout/checkout.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    AddressFormComponent,
    CartItemComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
