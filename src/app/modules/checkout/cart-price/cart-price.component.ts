import { Component, Input } from '@angular/core';
import { PriceDetails } from 'src/app/core/models/price-details.model';
export interface ButtonConfig {
  name: string,
  url: string
}
@Component({
  selector: 'app-cart-price',
  templateUrl: './cart-price.component.html',
  styleUrl: './cart-price.component.scss'
})
export class CartPriceComponent {

  @Input() buttonConfig!: ButtonConfig;

  @Input() priceDetails!: PriceDetails;

  @Input() isButtonDisabled: boolean = false;

}

