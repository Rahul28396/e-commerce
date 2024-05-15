import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pay-now',
  templateUrl: './pay-now.component.html',
  styleUrl: './pay-now.component.scss'
})
export class PayNowComponent {
  @Input() payNow!: Function;
  @Input() buttonName = 'Pay Now'
}
