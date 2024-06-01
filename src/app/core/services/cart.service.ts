import { Injectable, inject } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { LocalStorageService } from './local-storage.service';
import { PriceDetails } from '../models/price-details.model';
import { Address } from '../models/address.model';
import { OrdersService } from './orders.service';
import { Order } from '../models/order.model';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartStorageKey = 'CART';

  cartItems: CartProduct[] = [];

  selectedAddress!: Address;

  payment!: string;

  isOrderDone: boolean = false;

  private _snackbarService = inject(SnackbarService);

  get totalCartItems(): number {
    return this.cartItems.reduce((acc: number, item: CartProduct) => acc + (item.count ?? 0), 0)
  }

  constructor(
    private _localStorageService: LocalStorageService,
    private _orderService: OrdersService
  ) {
    this.cartItems = this._localStorageService.getItem(this.cartStorageKey) ?? [];
  }

  getCartItems() {
    this.cartItems = this._localStorageService.getItem(this.cartStorageKey) ?? [];
  }

  updateToCart(product: CartProduct, action: string): void {
    const cartItem = this.cartItems.find(item => item.productId === product.productId);
    if (cartItem && typeof cartItem.count === 'number') {
      if (action === 'add') {
        cartItem.count++;
      } else {
        cartItem.count--;
        if (cartItem.count === 0) {
          this.removeItem(product);
        }
      }
    } else {

      const newItem: CartProduct = {
        ...product,
        ...{
          id: this.cartItems.length + 1,
          count: 1,
        },

      };

      this.cartItems.push(newItem);
    }

    this._localStorageService.addItem<CartProduct[]>(this.cartStorageKey, this.cartItems);
    this._snackbarService.openSnackBar('Item is added to your cart');
    this.getCartItems();

  }

  removeItem(product: CartProduct): void {
    this._localStorageService.removeItem<CartProduct>(product.id, this.cartStorageKey);
    this._snackbarService.openSnackBar('Item is removed from your cart');
    this.getCartItems();
  }

  clearCart(): void {
    this._localStorageService.clearStorage(this.cartStorageKey);
    this._snackbarService.openSnackBar('All items are removed from your cart');
    this.getCartItems();
  }

  getCartPrice(): PriceDetails {
    const totalMrp = this.cartItems.reduce((acc, item) => acc + (item?.count ?? 0) * (item.price), 0);
    const discountOnMrp = this.cartItems.reduce((acc, item) => acc + (item?.count ?? 0) * (item.price * 0.3), 0);
    const couponDiscount = 0;
    const platformFee = 2;
    const shippingFee = 48;
    return new PriceDetails(totalMrp, discountOnMrp, couponDiscount, platformFee, shippingFee);
  }

  placeOrder() {
    const id = Math.round(Math.random() * 100);
    const priceDetails = this.getCartPrice();
    const orderDate = new Date();

    const oderDetails = new Order(id, this.payment, priceDetails, this.cartItems, orderDate, this.selectedAddress);

    this._orderService.placeOrder(oderDetails);
    this.clearCart();
    this.isOrderDone = true;
  }

}
