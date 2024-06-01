import { Component, inject, input } from '@angular/core';
import { CashOnDeliveryComponent } from '../cash-on-delivery/cash-on-delivery.component';
import { PayNowComponent } from '../pay-now/pay-now.component';
import { PaymentOption } from 'src/app/core/models/payment-option.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-recommended-payment',
  templateUrl: './recommended-payment.component.html',
  styleUrl: './recommended-payment.component.scss'
})
export class RecommendedPaymentComponent {

  private _cartService = inject(CartService);
  
  options: PaymentOption[] = [
    {
      displayName: 'Google pay',
      value: 'gpay',
      component: {
        name: PayNowComponent,
        inputs: { 
          payNow: () => {
            this._cartService.payment = 'GPay';
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
