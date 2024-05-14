import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';

import { CheckoutComponent } from './checkout/checkout.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { CartPriceComponent } from './cart-price/cart-price.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    CartItemComponent,
    CartComponent,
    CartPriceComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedComponentModule,
    PipeModule,
    FormsModule,
    MatIcon
  ]
})
export class CheckoutModule { }
