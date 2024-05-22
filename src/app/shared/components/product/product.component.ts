import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartProduct } from 'src/app/core/models/cart-product.model';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productInfo!: Product;
  @Input() isWishListProduct: boolean = false;
  @Output() moveToCart = new EventEmitter<number>();
  @Output() cancelProduct  = new EventEmitter<number>();

  constructor(
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _router: Router
  ) {

  }

  updateToCart(action: string): void {
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

  addToWishlist(productId: number): void {
    this._wishlistService.addToWishList(productId);
  }

  goToDetailsPage(productId: number): void{
    this._router.navigate(['products',productId])
  }
  
}
