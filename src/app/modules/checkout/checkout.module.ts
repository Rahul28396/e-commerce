import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';

import { CheckoutComponent } from './checkout/checkout.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { CartPriceComponent } from './cart-price/cart-price.component';
import { CommonMaterialModule } from '../common-material/common-material.module';
import { PaymentComponent } from './payment/payment.component';
import { CashOnDeliveryComponent } from './payment-mode/cash-on-delivery/cash-on-delivery.component';
import { CardPaymentComponent } from './payment-mode/card-payment/card-payment.component';
import { UpiPaymentComponent } from './payment-mode/upi-payment/upi-payment.component';
import { RecommendedPaymentComponent } from './payment-mode/recommended-payment/recommended-payment.component';
import { PayNowComponent } from './payment-mode/pay-now/pay-now.component';
import { PaymentOptionComponent } from './payment-mode/payment-option/payment-option.component';
import { OrderSuccessfullComponent } from './order-successfull/order-successfull.component';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';
import { AddressModule } from '../address/address.module';

@NgModule({
  declarations: [
    CheckoutComponent,
    CartItemComponent,
    CartComponent,
    CartPriceComponent,
    PaymentComponent,
    CashOnDeliveryComponent,
    CardPaymentComponent,
    UpiPaymentComponent,
    RecommendedPaymentComponent,
    PayNowComponent,
    PaymentOptionComponent,
    OrderSuccessfullComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedComponentModule,
    CommonMaterialModule,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    AddressModule
  ]
})
export class CheckoutModule { }
