import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrl: './cash-on-delivery.component.scss'
})
export class CashOnDeliveryComponent {

  private _cartService = inject(CartService);

  placeOrder(){
      this._cartService.payment = 'Cash on delivery';
      this._cartService.placeOrder();
  }
}
