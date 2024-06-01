import { Injectable, inject } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { CartProduct } from '../models/cart-product.model';
import { LocalStorageService } from './local-storage.service';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(
    private _cartService: CartService,
    private _productService: ProductService,
    private _localStorageService: LocalStorageService
  ) {
    this.wishListProducts = this.getWishlistProducts();
  }

  wishListProducts: Product[] = [];
  wishListStorageKey: string = 'WISHLIST';
  private _snackbarService = inject(SnackbarService);

  getWishlistProducts(): Product[] {
    return this._localStorageService.getItem<Product[]>(this.wishListStorageKey) ?? [];
  }

  addToWishList(productId: number): void {
    this._productService.getProduct(productId).subscribe({
      next: (data) => {
        if (!this.wishListProducts.find(item => item.id === productId)) {
          this.wishListProducts.push(data);
          this._localStorageService.addItem<Product[]>(this.wishListStorageKey, this.wishListProducts);
          this._snackbarService.openSnackBar('Item is added to your wishlist');
        }else{
          this._snackbarService.openSnackBar('Already present in the wishlist');
        }
      },
      error: (err) => {
        this._snackbarService.openSnackBar('Oopps!! Something went wrong.Please try after sometime');
      },
      complete: () => {

      }
    });
  }

  removeFromWishList(productId: number): void {
    this.wishListProducts = this.wishListProducts.filter((item) => item.id !== productId);
    this._localStorageService.removeItem(productId, this.wishListStorageKey);
    this._snackbarService.openSnackBar('Item successfully removed from wishlist');
  }

  moveToBag(productId: number): void {
    this.removeFromWishList(productId);
    this._productService.getProduct(productId).subscribe({
      next: (data) => {
        const cartProduct: CartProduct = {
          id: 0,
          productId: data.id,
          title: data.title,
          price: data.price,
          image: data.images[0]
        }
        this._cartService.updateToCart(cartProduct, 'add');
        this._snackbarService.openSnackBar('Item successfully moved to your cart');
      },
      error: (err) => {
        this._snackbarService.openSnackBar('Oopps!! Something went wrong.Please try after sometime');
      },
      complete: () => {

      }
    });
  }
}
