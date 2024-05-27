import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit{

  constructor(
    public cartService: CartService,
    private _router : Router
  ) {}

  @ViewChildren(CartItemComponent) cartItems!: QueryList<CartItemComponent>;

  ngOnInit(): void {
    console.log('ngOnInit called and cartItem value:', this.cartItems);
  } 

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called and cartItem value:', this.cartItems.last);
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
