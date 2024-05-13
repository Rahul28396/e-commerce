import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {

  @Input() title: string = 'Hey,its feels your cart is empty';
  @Input() subtitle: string = 'There is nothing in your bag.'
  @Input() icon : string = 'shopping_cart';
}
