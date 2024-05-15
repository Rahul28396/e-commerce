import { Component } from '@angular/core';

@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrl: './cash-on-delivery.component.scss'
})
export class CashOnDeliveryComponent {

  placeOrder(){
    alert('Cash on delivery');
  }
}
