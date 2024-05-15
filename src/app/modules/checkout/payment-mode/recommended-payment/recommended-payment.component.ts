import { Component, input } from '@angular/core';
import { CashOnDeliveryComponent } from '../cash-on-delivery/cash-on-delivery.component';
import { PayNowComponent } from '../pay-now/pay-now.component';
import { PaymentOption } from 'src/app/core/models/payment-option.model';

@Component({
  selector: 'app-recommended-payment',
  templateUrl: './recommended-payment.component.html',
  styleUrl: './recommended-payment.component.scss'
})
export class RecommendedPaymentComponent {

  options: PaymentOption[] = [
    {
      displayName: 'Cash on delivery',
      value: 'cash-on-delivery',
      component: {
        name: CashOnDeliveryComponent,
      }
    },
    {
      displayName: 'Google pay',
      value: 'gpay',
      component: {
        name: PayNowComponent,
        inputs: { 
          payNow: () => alert('Paid via gpay') 
        }
      }
    },
    {
      displayName: 'PhonePe',
      value: 'phonePe',
      component: {
        name: PayNowComponent,
        inputs: { payNow: () => alert('Paid via PhonePe') }
      }
    }
  ];

  selectedOption!: string;

  constructor(){
    console.log(typeof CashOnDeliveryComponent);
  }
}
