import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: Product[] , ...args: unknown[]): Product[] {
    const price = 400;
    console.log(args)
    return products.filter(product => product.price < (args[0] as number));
  }

}
