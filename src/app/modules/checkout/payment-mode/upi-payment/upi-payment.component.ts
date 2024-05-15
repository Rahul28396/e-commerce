import { Component } from '@angular/core';
import { PaymentOption } from 'src/app/core/models/payment-option.model';
import { PayNowComponent } from '../pay-now/pay-now.component';

@Component({
  selector: 'app-upi-payment',
  templateUrl: './upi-payment.component.html',
  styleUrl: './upi-payment.component.scss'
})
export class UpiPaymentComponent {
  options: PaymentOption[] = [
    {
      displayName: 'BHIM',
      value: 'bhim',
      component: {
        name: PayNowComponent,
        inputs: { 
          payNow: () => alert('Paid via bhim app') 
        }
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
}
