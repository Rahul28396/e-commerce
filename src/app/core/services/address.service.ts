import { Injectable, inject } from '@angular/core';
import { Address } from '../models/address.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressStorageKey = 'ADDRESS';
  
  private localStorageService = inject(LocalStorageService);

  addressList : Address[] = [];

  constructor(){
    this.addressList = this.getAllAddress();
  }

  getAllAddress():Address [] {
    return this.localStorageService.getItem<Address[]>(this.addressStorageKey) ?? [];
  }

  addNewAddress(address: Address): void{
    this.addressList.push(address)
    this.localStorageService.addItem(this.addressStorageKey,this.addressList);
  }

  editAddress(address: Address): void{
    
  }

  deleteAddress(id: number): void{
    this.localStorageService.removeItem(id,this.addressStorageKey);
  }
}
