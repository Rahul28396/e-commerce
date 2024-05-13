import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartStorageKey = 'CART';

  cartItems: CartProduct[] = [];

  get totalCartItems(): number{
    return this.cartItems.reduce((acc: number,item:CartProduct)=> acc + (item.count ?? 0) ,0)
  }

  constructor(private _localStorageService: LocalStorageService) {
    this.cartItems = this._localStorageService.getItem(this.cartStorageKey) ?? [];
  }

  getCartItems() {
    this.cartItems = this._localStorageService.getItem(this.cartStorageKey) ?? [];
  }

  updateToCart(product: CartProduct, action: string) {
    const cartItem = this.cartItems.find(item => item.productId === product.productId);
    if (cartItem && typeof cartItem.count === 'number') {
      if(action === 'add') {
        cartItem.count++;
      }else{
        cartItem.count--;
        if(cartItem.count === 0){
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

    this.getCartItems();
    
  }

  removeItem(product: CartProduct) {
    this._localStorageService.removeItem<CartProduct>(product.id, this.cartStorageKey);
    this.getCartItems();
  }

  clearCart() {
    this._localStorageService.clearStorage(this.cartStorageKey);
    this.getCartItems();
  }

}
