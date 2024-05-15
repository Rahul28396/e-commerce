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
import { CommonMaterialModule } from '../common-material/common-material.module';
import { PaymentComponent } from './payment/payment.component';
import { CashOnDeliveryComponent } from './payment-mode/cash-on-delivery/cash-on-delivery.component';
import { CardPaymentComponent } from './payment-mode/card-payment/card-payment.component';
import { UpiPaymentComponent } from './payment-mode/upi-payment/upi-payment.component';
import { RecommendedPaymentComponent } from './payment-mode/recommended-payment/recommended-payment.component';
import { PayNowComponent } from './payment-mode/pay-now/pay-now.component';
import { PaymentOptionComponent } from './payment-mode/payment-option/payment-option.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartItemComponent,
    CartComponent,
    CartPriceComponent,
    AddressComponent,
    PaymentComponent,
    CashOnDeliveryComponent,
    CardPaymentComponent,
    UpiPaymentComponent,
    RecommendedPaymentComponent,
    PayNowComponent,
    PaymentOptionComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedComponentModule,
    CommonMaterialModule,
    PipeModule,
    FormsModule,
    MatIcon
  ]
})
export class CheckoutModule { }
