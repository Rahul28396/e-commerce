import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaymentType, PaymentTypeEnum } from 'src/app/core/models/payment-type.model';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class PaymentComponent {

  paymentOptions: PaymentType[] = [
    {
      name: 'Recommended',
      icon: 'stars',
      header: 'Recommended Payment Options',
      type: PaymentTypeEnum.recommended,
    },
    {
      name: 'Cash On Delivery',
      icon: 'payments',
      header: 'Cash On Delivery (Cash/UPI)',
      type: PaymentTypeEnum.cash,
    },
    {
      name: 'UPI (Pay via any app)',
      icon: 'book_online',
      header: 'Pay using UPI',
      type: PaymentTypeEnum.upi,
    },
    {
      name: 'Credit / Debit cards',
      icon: 'credit_card',
      header: 'Credit/Debit card',
      type:  PaymentTypeEnum.card,
    }
  ];

  paymentOptionTypes = PaymentTypeEnum;

  selectedOption: PaymentType  = this.paymentOptions[0];

  selectOption(option: PaymentType) {
    this.selectedOption = option;
  }

}
