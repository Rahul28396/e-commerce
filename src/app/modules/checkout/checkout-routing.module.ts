import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from '../address/address/address.component';


const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: 'cart',
        component: CartComponent,
        title: 'CART'
      },
      {
        path: 'address',
        component: AddressComponent,
        title: 'ADDRESS'
      },
      {
        path: 'payment',
        component: PaymentComponent,
        title: 'PAYMENT'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
