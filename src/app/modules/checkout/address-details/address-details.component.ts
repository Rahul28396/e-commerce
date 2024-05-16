import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from 'src/app/core/models/address.model';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrl: './address-details.component.scss'
})
export class AddressDetailsComponent {

  @Input()
  addressDetails!: Address;

  @Input()
  isChecked = false;

  @Output()
  removeAddress = new EventEmitter<number>();

  @Output()
  editAddress = new EventEmitter<Address>();;

  @Output()
  onChange = new EventEmitter<Address>();
}
