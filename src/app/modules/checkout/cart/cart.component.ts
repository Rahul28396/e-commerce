import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(
    public cartService: CartService,
    private _router : Router
  ) {
  }

  clearCart() {
    this.cartService.clearCart();
  }

  moveToWishlist() {
    console.log('Moved to wishlist')
  }

  goToCart() {
    this._router.navigateByUrl('/wishlist')
  }
}
