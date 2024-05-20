import { Component, inject } from '@angular/core';
import { PaymentOption } from 'src/app/core/models/payment-option.model';
import { PayNowComponent } from '../pay-now/pay-now.component';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-upi-payment',
  templateUrl: './upi-payment.component.html',
  styleUrl: './upi-payment.component.scss'
})
export class UpiPaymentComponent {

  private _cartService = inject(CartService);

  options: PaymentOption[] = [
    {
      displayName: 'BHIM',
      value: 'bhim',
      component: {
        name: PayNowComponent,
        inputs: {
          payNow: () => {
            this._cartService.payment = 'BHIM';
            this._cartService.placeOrder();
          }
        }
      }
    },
    {
      displayName: 'Google pay',
      value: 'gpay',
      component: {
        name: PayNowComponent,
        inputs: {
          payNow: () => {
            this._cartService.payment = 'Gpay';
            this._cartService.placeOrder();
          }
        }
      }
    },
    {
      displayName: 'PhonePe',
      value: 'phonePe',
      component: {
        name: PayNowComponent,
        inputs: {
          payNow: () => {
            this._cartService.payment = 'PhonePe';
            this._cartService.placeOrder();
          }
        }
      }
    }
  ];

  selectedOption!: string;
}
