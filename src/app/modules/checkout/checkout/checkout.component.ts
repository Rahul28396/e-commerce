import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, ResolveEnd, Router, Scroll } from '@angular/router';
import { PriceDetails } from 'src/app/core/models/price-details.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  pageName = '';

  constructor(
    private _cartService: CartService,
    private _route: Router
  ) {

  }

  ngOnInit(): void {
    this._route.events.subscribe(value => {
      if(value instanceof Scroll){
        const url = value.routerEvent.url;
        this.pageName = url.split('/').pop() ?? 'cart';
      }
    })
  }

  get isEmptyState() {
    return !this._cartService.cartItems.length;
  }

  get buttonConfig() {
    switch (this.pageName) {
      case 'cart':
        return {
          name: 'Place Order',
          url: '/checkout/address'
        };
      case 'address':
        return {
          name: 'Continue',
          url: '/checkout/payment'
        };
      default:
        return {
          name: '',
          url: ''
        };
    }
  }

  get isOrderDone(){
    return this._cartService.isOrderDone
  }

  get cartPrice(): PriceDetails{
    return this._cartService.getCartPrice()
  }
}
