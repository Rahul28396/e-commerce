import { Component, Input } from '@angular/core';
import { PaymentOption } from 'src/app/core/models/payment-option.model';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrl: './payment-option.component.scss'
})
export class PaymentOptionComponent {

  @Input()
  options: PaymentOption[] = [];

  @Input()
  selectedOption: string = '';

}
