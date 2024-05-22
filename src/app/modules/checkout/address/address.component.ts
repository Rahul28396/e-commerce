import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressFormComponent } from '../address-form/address-form.component';
import { AddressService } from 'src/app/core/services/address.service';
import { Address } from 'src/app/core/models/address.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private addressService: AddressService,
    private cartService: CartService
  ) { }

  addressList: Address[] = [];

  selectedAddress?: Address;

  ngOnInit(): void {
    this.getAllAddress();
  }

  openDialog(address?: Address) {
    const dialogRef = this.dialog.open(AddressFormComponent, {
      data: address
    });

    dialogRef.afterClosed().subscribe((_) => {
      this.getAllAddress();
    });
  }

  getAllAddress(): void {
    this.addressList = this.addressService.getAllAddress();
    
    if(this.addressList.length){
      const defaultAddress = this.addressList.find(address => address.isDefault) || this.addressList[0];
      defaultAddress.isDefault = true;
      this.selectedAddress = defaultAddress;
      this.selectAddress(defaultAddress);
    }
    
  }

  selectAddress(address: Address) {
    this.selectedAddress = address;
    this.cartService.selectedAddress = address;
  }

  editAddress(address: Address) {
    this.openDialog(address);
  }

  removeAddress(id: number) {
    this.addressService.deleteAddress(id);
    this.getAllAddress();
  }
}
