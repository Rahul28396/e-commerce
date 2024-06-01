import { Injectable, inject } from '@angular/core';
import { Order } from '../models/order.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private storageKey = 'ORDERS';
  private localStorageService = inject(LocalStorageService);

  constructor() { }

  getOrders(): Order[]{
    return this.localStorageService.getItem<Order[]>(this.storageKey) ?? [];
  }

  placeOrder(order: Order){
    const orders = this.getOrders();
    orders.push(order);
    this.localStorageService.addItem(this.storageKey,orders);
  }
}
