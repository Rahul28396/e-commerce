import { Component, OnInit, inject } from '@angular/core';
import { Order } from 'src/app/core/models/order.model';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orderList: Order[] = [];
  private orderService = inject(OrdersService);

  ngOnInit(): void {
    this.orderList = this.orderService.getOrders();
  }

}
