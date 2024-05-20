import { Pipe, PipeTransform } from '@angular/core';
import { PriceDetails } from 'src/app/core/models/price-details.model';

@Pipe({
  name: 'totalPrice',
})
export class TotalPricePipe implements PipeTransform {

  transform(value: PriceDetails): number {

    return value.totalMrp + value.shippingFee + value.platformFee - value.couponDiscount - value.discountOnMrp;
  }

}
