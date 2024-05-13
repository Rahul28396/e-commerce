import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(public cartService: CartService) {
  }

  clearCart(){
    this.cartService.clearCart();
  }

  moveToWishlist(){
    console.log('Moved to wishlist')
  }
}
