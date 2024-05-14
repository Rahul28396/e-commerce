import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    CommonModule,
    SharedComponentModule
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit{
  wishlistProducts: Product[] = [];

  constructor(private _wishlistservice: WishlistService){

  }

  ngOnInit(): void {
    this.getWishList();
  }

  getWishList(){
    this.wishlistProducts = this._wishlistservice.getWishlistProducts();
    console.log(this.wishlistProducts)
  }

  moveToBag(productId: number){
    this._wishlistservice.moveToBag(productId);
    this.getWishList();
  }

  removeItem(productId: number){
    this._wishlistservice.removeFromWishList(productId);
    this.getWishList();
  }
}
