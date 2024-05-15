import { Component, Input } from '@angular/core';
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

  @Input() buttonConfig!: ButtonConfig

}

