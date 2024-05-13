import { Component, Input } from '@angular/core';
import { CartProduct } from 'src/app/core/models/cart-product.model';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem! : CartProduct;

  constructor(private cartService: CartService){

  }

  updateCartItem(action: string){
    this.cartService.updateToCart(this.cartItem,action);
  }

  removeCartItem(){
    this.cartService.removeItem(this.cartItem);
  }
}
