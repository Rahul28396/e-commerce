import { Component, Input } from '@angular/core';
import { CartProduct } from 'src/app/core/models/cart-product.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss'
})
export class OrderItemComponent {
  @Input() orderItem!: CartProduct;
}
