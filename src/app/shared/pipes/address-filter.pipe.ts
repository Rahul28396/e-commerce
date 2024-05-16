import { Pipe, PipeTransform } from '@angular/core';
import { Address } from 'src/app/core/models/address.model';

@Pipe({
  name: 'addressFilter',
  pure: false
})
export class AddressFilterPipe implements PipeTransform {

  transform(addressList: Address[], isDefault: boolean): Address[] {
    return addressList.filter(address => address.isDefault === isDefault);
  }

}
