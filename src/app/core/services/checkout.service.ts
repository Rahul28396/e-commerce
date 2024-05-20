import { Injectable } from '@angular/core';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  selectedAddress!: Address;
  selectedPaymentMethod!: string;
}
