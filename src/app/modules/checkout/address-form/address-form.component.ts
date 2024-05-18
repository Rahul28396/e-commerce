import { Component, Inject, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Address } from 'src/app/core/models/address.model';
import { AddressService } from 'src/app/core/services/address.service';
import { phoneNumberValidator, pincodeValidator } from 'src/app/core/validators/validator';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {

  constructor(
    private dialogRef: MatDialogRef<AddressFormComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: Address
  ) {

  }

  addressform = new FormGroup({
    name: new FormControl<String>(this.dialogData?.name ?? '', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl<number>(this.dialogData?.phone ?? 0, [Validators.required, phoneNumberValidator()]),
    pincode: new FormControl<number>(this.dialogData?.pincode ?? 0, [Validators.required, pincodeValidator()]),
    area: new FormControl<string>(this.dialogData?.area ?? '', [Validators.required]),
    locality: new FormControl<string>(this.dialogData?.locality ?? '', [Validators.required]),
    district: new FormControl<string>(this.dialogData?.district ?? '', [Validators.required]),
    state: new FormControl<string>(this.dialogData?.state ?? '', [Validators.required]),
    isDefault: new FormControl<boolean>(this.dialogData?.isDefault ?? false),
    type: new FormControl<String>(this.dialogData?.type ?? 'Home')
  });

  private addressService = inject(AddressService);

  get addressType(): string {
    return typeof this.addressform.value.type === 'string' ? this.addressform.value.type : 'Home';
  }

  formControl(value: string): AbstractControl<String | null, String | null> | null {
    return this.addressform.get(value);
  }

  saveAddress() {
    const { value: { name, phone, pincode, area, locality, district, state, isDefault, type } } = this.addressform;

    const newAddress = {
      id: Math.random() * 10 + 1,
      name: name as string,
      phone: phone as number,
      pincode: pincode as number,
      area: area as string,
      locality: locality as string,
      district: district as string,
      state: state as string,
      isDefault: isDefault as boolean,
      type: type as string
    };

    this.addressService.addNewAddress(newAddress);
    this.dialogRef.close();
  }

  changeAddressType() {
    this.addressform.patchValue({
      type: this.addressType === 'Home' ? 'Work' : 'Home'
    });
  }
}
