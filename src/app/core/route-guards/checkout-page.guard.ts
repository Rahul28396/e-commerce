import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

export const checkoutPageGuard: CanActivateChildFn = (route, state) => {
  const cartService = inject(CartService);
  const router = inject(Router);
  const isCartPage = state.url.includes('cart');
  /**
   * 1. Cart page should be always accessible
   * 2. If cart has any item then it should allow to address & payment page.
   * 3. Otherwise it should redirect to empty cart page
   */

  if (isCartPage) {
    cartService.isOrderDone = false;
    return true;
  } else {
    if (cartService.cartItems.length) {
      return true;
    } else {
      cartService.isOrderDone = false;
      router.navigateByUrl('/checkout/cart');
    }
  }

  return false;
};
