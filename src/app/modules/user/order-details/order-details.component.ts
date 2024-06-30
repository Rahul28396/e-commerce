import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/core/models/order.model';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent implements OnInit{

  orderDetails!: Order | undefined;
  private _location = inject(Location);

  constructor(
    private _routerService: ActivatedRoute,
    private _orderService: OrdersService,
  ) {}


  ngOnInit(): void {
    this._routerService.paramMap.subscribe(data => {
      const orderId = Number(data.get('orderId'));
      this.orderDetails = this._orderService.getOrderById(orderId);
    })
  }

  goBack(){
    this._location.back()
  }

}
