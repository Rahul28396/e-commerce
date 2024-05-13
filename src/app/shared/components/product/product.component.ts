import { Component, Input } from '@angular/core';
import { CartProduct } from 'src/app/core/models/cart-product.model';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productInfo!: Product;

  constructor(private _cartService: CartService) {

  }

  updateToCart(action: string) {
    const { id, title, images, price } = this.productInfo;
    const cartItem: CartProduct = {
      id: 0,
      productId: id,
      price,
      title,
      image: images[0]
    }
    this._cartService.updateToCart(cartItem, action)
  }
}
